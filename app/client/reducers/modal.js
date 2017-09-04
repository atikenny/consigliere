const modal = (state = { show: false, page: null }, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return {
                show: !state.show,
                page: action.page
            };
        default:
            return state;
    }
};

export default modal;
