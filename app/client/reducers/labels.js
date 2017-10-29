const item = (state, action) => {
    let hasLabelAlready;

    switch (action.type) {
        case 'ADD_LABEL':
            if (state.id !== action.id) {
                return state;
            }

            if (state.items.includes(state.newLabelValue)) {
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
        case 'ADD_LABEL_MULTIPLE':
            hasLabelAlready = state.items.includes(action.label);

            if (!action.transactionIds.includes(state.id) || hasLabelAlready) {
                return state;
            }

            return Object.assign({}, state, {
                items: state.items.concat(action.label)
            });
        case 'REMOVE_LABEL_MULTIPLE':
            const labelIndex = state.items.indexOf(action.label);
            
            hasLabelAlready = labelIndex !== -1;

            if (!action.transactionIds.includes(state.id) || !hasLabelAlready) {
                return state;
            }

            return Object.assign({}, state, {
                items: [
                    ...state.items.slice(0, labelIndex),
                    ...state.items.slice(labelIndex + 1)
                ]
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
        case 'ADD_LABEL_MULTIPLE':
        case 'REMOVE_LABEL_MULTIPLE':
            return state.map(label => item(label, action));
        default:
            return state;
    }
};


export default labels;
