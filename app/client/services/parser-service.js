const endOfLineChar = '\n';

const isNotEmptyLine = line => Boolean(line);
export const parseCSV = (csv) => {
    let lines = csv.split(endOfLineChar).filter(isNotEmptyLine);
    const firstLine = lines.shift(1);
    const headers = firstLine.split(',').filter(column => Boolean(column));

    const parsedCSV = lines.map(line => {
        const columns = line.split(',');
        let lineObject = {};
        
        headers.forEach((header, index) => {
            lineObject[header] = columns[index];
        });

        return lineObject;
    });

    return parsedCSV;
};

const transactionTypes = {
    credit: 'credit',
    debit: 'debit',
    income: 'income',
    standingOrder: 'standing order',
    directDebit: 'direct debit',
    bankingFee: 'banking fee'
};

export const formats = {
    LLOYDS: {
        name: 'LLOYDS',
        debitAmountKey: 'Debit Amount',
        creditAmountKey: 'Credit Amount',
        descriptionKey: 'Transaction Description',
        dateKey: 'Transaction Date',
        typeKey: 'Transaction Type',
        getDate: (dateString) => {
            const day = dateString.substr(0, 2);
            const month = dateString.substr(3, 2);
            const year = dateString.substr(7, 4);

            return new Date(`${month}/${day}/${year}`);
        },
        transactionTypeMap: {
            'DEB': transactionTypes.debit,
            'SO': transactionTypes.standingOrder,
            'DD': transactionTypes.directDebit,
            'PAY': transactionTypes.bankingFee,
            'BGC': transactionTypes.income,
            'TFR': transactionTypes.income,
            'DEP': transactionTypes.credit
        }
    }
};

export const mapTransactions = (format, transactions) => {
    return transactions.map((transaction, index) => {
        const dateString = transaction[format.dateKey];
        const date = format.getDate(dateString);
        const debitAmount = transaction[format.debitAmountKey];
        const creditAmount = transaction[format.creditAmountKey];
        const amount = parseFloat(debitAmount || creditAmount);
        const transactionType = format.transactionTypeMap[transaction[format.typeKey]];
        const description = transaction[format.descriptionKey];
        const id = index;

        return {
            id,
            date,
            amount,
            transactionType,
            description
        };
    });
};
