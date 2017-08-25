const filter = (state = '', action) => {
    switch (action.type) {
        case 'EDIT_FILTER':
            return action.filter;
        default:
            return state;
    }
};

export default filter;
