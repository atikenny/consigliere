export const addLabel = (id) => {
    return {
        type: 'ADD_LABEL',
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

export const toggleLabels = (id) => {
    return {
        type: 'TOGGLE_LABELS',
        id
    };
};

export const addLabelMultiple = (label, transactionIds) => {
    return {
        type: 'ADD_LABEL_MULTIPLE',
        label,
        transactionIds
    };
};

export const removeLabelMultiple = (label, transactionIds) => {
    return {
        type: 'REMOVE_LABEL_MULTIPLE',
        label,
        transactionIds
    };
};
