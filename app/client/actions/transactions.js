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

export const addLabelMultiple = (label) => {
    return {
        type: 'ADD_LABEL_MULTIPLE',
        label
    };
};

export const removeLabelMultiple = (label) => {
    return {
        type: 'REMOVE_LABEL_MULTIPLE',
        label
    };
};
