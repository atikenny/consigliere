const initialState = {
    show: false,
    page: undefined
};

const modal = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                show: true,
                page: action.page
            };
        case 'HIDE_MODAL':
            return {
                show: false,
                page: undefined
            };
        default:
            return state;
    }
};

export default modal;
