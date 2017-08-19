export const load = (transactions) => {
    return {
        type: 'LOAD_TRANSACTIONS',
        transactions
    };
};

export const addLabel = (id, label) => {
    return {
        type: 'ADD_LABEL',
        id,
        label
    };
};

