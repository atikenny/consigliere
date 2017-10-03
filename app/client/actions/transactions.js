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

export const addLabel = (id) => {
    return {
        type: 'ADD_LABEL',
        id
    };
};

export const toggleLabels = (id) => {
    return {
        type: 'TOGGLE_LABELS',
        id
    };
};

export const deleteLabel = (transactionId, label) => {
    return {
        type: 'DELETE_LABEL',
        transactionId,
        label
    };
};

export const setNewLabelValue = (id, value) => {
    return {
        type: 'SET_NEW_LABEL_VALUE',
        id,
        value
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
