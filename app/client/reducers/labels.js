const hasLabel = (label, items) => {
    return items.some(item => item === label);
};

const item = (state, action) => {
    switch (action.type) {
        case 'ADD_LABEL':
            if (state.id !== action.id) {
                return state;
            }

            if (hasLabel(state.newLabelValue, state.items)) {
                return state;
            }

            if (!state.newLabelValue) {
                return state;
            }

            return Object.assign({}, state, {
                items: state.items.concat(state.newLabelValue)
            });
        case 'DELETE_LABEL':
            if (state.id !== action.transactionId) {
                return state;
            }

            return Object.assign({}, state, {
                items: state.items.filter(label => label !== action.label)
            });
        case 'SET_NEW_LABEL_VALUE':
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                newLabelValue: action.value
            });
        case 'TOGGLE_LABELS':
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                isOpen: !state.isOpen
            });
        default:
            return state;
    }
};

const hasState = (labels, id) => {
    return labels.some(label => label.id === id);
};

const initialItemState = {
    isOpen: false,
    newLabelValue: '',
    items: []
};

const labels = (state = [], action) => {
    if (action.id && !hasState(state, action.id)) {
        state.push(Object.assign({}, initialItemState, {
            id: action.id
        }));
    }

    switch (action.type) {
        case 'ADD_LABEL':
        case 'SET_NEW_LABEL_VALUE':
        case 'DELETE_LABEL':
        case 'TOGGLE_LABELS':
            return state.map(label => item(label, action));
        default:
            return state;
    }
};


export default labels;
