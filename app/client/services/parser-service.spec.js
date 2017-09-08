import { parseCSV, formats, mapTransactions } from './parser-service';

describe('parser-service', () => {
    describe('parseCSV()', () => {
        test('handles regular case', () => {
            const CSV = 'head1,head2\nrow1-value1,row1-value2\nrow2-value1,row2-value2';
            expect(parseCSV(CSV)).toEqual([
                { head1: 'row1-value1', head2: 'row1-value2' },
                { head1: 'row2-value1', head2: 'row2-value2' }
            ]);
        });

        test('handles end of file new line case', () => {
            const CSV = 'head1,head2\nrow1-value1,row1-value2\nrow2-value1,row2-value2\n';
            expect(parseCSV(CSV)).toEqual([
                { head1: 'row1-value1', head2: 'row1-value2' },
                { head1: 'row2-value1', head2: 'row2-value2' }
            ]);
        });

        test('handles additional comma at the enf of headers', () => {
            const CSV = 'head1,head2,\nrow1-value1,row1-value2\nrow2-value1,row2-value2\n';
            expect(parseCSV(CSV)).toEqual([
                { head1: 'row1-value1', head2: 'row1-value2' },
                { head1: 'row2-value1', head2: 'row2-value2' }
            ]);
        });
    });

    describe('formats', () => {
        test('LLOYDS getDate converts a date to a date object', () => {
            expect(formats.LLOYDS.getDate('01/02/2017')).toEqual(new Date('2017-02-01'));
        });
    });

    describe('mapTransactions()', () => {
        test('maps LLOYDS transactions', () => {
            // ID hash mock
            let transactionIndex = 0;
            global.btoa = jest.fn(() => transactionIndex++);

            const lloydsFormat = formats.LLOYDS;
            let debitTransaction = {};

            debitTransaction[lloydsFormat.dateKey] = '01/02/2017';
            debitTransaction[lloydsFormat.debitAmountKey] = '12.34';
            debitTransaction[lloydsFormat.typeKey] = 'DEB';
            debitTransaction[lloydsFormat.descriptionKey] = 'debit transaction description';

            let similarDebitTransaction = {};

            similarDebitTransaction[lloydsFormat.dateKey] = '02/03/2017';
            similarDebitTransaction[lloydsFormat.debitAmountKey] = '123.4';
            similarDebitTransaction[lloydsFormat.typeKey] = 'DEB';
            similarDebitTransaction[lloydsFormat.descriptionKey] = 'debit transaction description';

            let creditTransaction = {};

            creditTransaction[lloydsFormat.dateKey] = '31/12/2018';
            creditTransaction[lloydsFormat.creditAmountKey] = '1234';
            creditTransaction[lloydsFormat.typeKey] = 'DEP';
            creditTransaction[lloydsFormat.descriptionKey] = 'credit transaction description';

            const transactions = [debitTransaction, similarDebitTransaction, creditTransaction];
            const mappedTransactions = [
                {
                    id: 0,
                    amount: 12.34,
                    date: new Date('2017-02-01'),
                    transactionType: 'debit',
                    description: 'debit transaction description',
                    similarCount: 1
                },
                {
                    id: 1,
                    amount: 123.4,
                    date: new Date('2017-03-02'),
                    transactionType: 'debit',
                    description: 'debit transaction description',
                    similarCount: 1
                },
                {
                    id: 2,
                    amount: 1234,
                    date: new Date('2018-12-31'),
                    transactionType: 'credit',
                    description: 'credit transaction description',
                    similarCount: 0
                }
            ];

            expect(mapTransactions(lloydsFormat, transactions)).toEqual(mappedTransactions);
            expect(global.btoa.mock.calls).toEqual([
                [`${debitTransaction[lloydsFormat.dateKey]} ${mappedTransactions[0].amount} ${mappedTransactions[0].description} ${mappedTransactions[0].transactionType}`],
                [`${similarDebitTransaction[lloydsFormat.dateKey]} ${mappedTransactions[1].amount} ${mappedTransactions[1].description} ${mappedTransactions[1].transactionType}`],
                [`${creditTransaction[lloydsFormat.dateKey]} ${mappedTransactions[2].amount} ${mappedTransactions[2].description} ${mappedTransactions[2].transactionType}`]
            ]);
        });
    });
});
