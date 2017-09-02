import { concatUnique } from './array-service';

describe('array service module', () => {
    describe('concatUnique()', () => {
        test('adds new items to array', () => {
            const array = [1];
            const newItems = [2, 3];

            const newArray = concatUnique(array, newItems);

            expect(newArray).toEqual([1, 2, 3]);
        });

        test('handles no new items', () => {
            const array = [1, 2, 3, 4];
            const newItems = [2, 3];

            const newArray = concatUnique(array, newItems);

            expect(newArray).toEqual([1, 2, 3, 4]);
        });

        test('handles duplicate items', () => {
            const array = [1, 2, 3, 4];
            const newItems = [2, 2, 3, 3, 4, 4];

            const newArray = concatUnique(array, newItems);

            expect(newArray).toEqual([1, 2, 3, 4]);
        });
    });
});
