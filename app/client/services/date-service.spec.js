import { formatDate } from './date-service';

describe('date-service', () => {
    test('formatDate method', () => {
        expect(formatDate('2017-01-01')).toBe('Sun Jan 01 2017');
    });
});
