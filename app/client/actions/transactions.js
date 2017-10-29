export const load = (transactions) => {
    return {
        type: 'LOAD_TRANSACTIONS',
        transactions
    };
};

export const deleteItem = (id) => {
    return {
        type: 'DELETE_TRANSACTION',
        id
    };
};

export const setFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        filter
    };
};
