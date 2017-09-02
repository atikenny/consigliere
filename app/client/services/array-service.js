export const concatUnique = (array, newItems) => {
    const uniqueNewItems = newItems.filter(newItem => {
        return !array.some(item => item === newItem);
    });
    
    return array.concat(uniqueNewItems);
};
