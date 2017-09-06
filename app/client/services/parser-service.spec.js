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
            const lloydsFormat = formats.LLOYDS;
            let debitTransaction = {};

            debitTransaction[lloydsFormat.dateKey] = '01/02/2017';
            debitTransaction[lloydsFormat.debitAmountKey] = '12.34';
            debitTransaction[lloydsFormat.typeKey] = 'DEB';
            debitTransaction[lloydsFormat.descriptionKey] = 'debit transaction description';

            let creditTransaction = {};

            creditTransaction[lloydsFormat.dateKey] = '31/12/2018';
            creditTransaction[lloydsFormat.creditAmountKey] = '1234';
            creditTransaction[lloydsFormat.typeKey] = 'DEP';
            creditTransaction[lloydsFormat.descriptionKey] = 'credit transaction description';

            const transactions = [debitTransaction, creditTransaction];

            expect(mapTransactions(lloydsFormat, transactions)).toEqual([
                {
                    id: 0,
                    amount: 12.34,
                    date: new Date('2017-02-01'),
                    transactionType: 'debit',
                    description: 'debit transaction description',
                    similarCount: 0
                },
                {
                    id: 1,
                    amount: 1234,
                    date: new Date('2018-12-31'),
                    transactionType: 'credit',
                    description: 'credit transaction description',
                    similarCount: 0
                }
            ]);
        });
    });
});
