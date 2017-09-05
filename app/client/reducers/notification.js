const initialState = {
    show: false,
    text: ''
};

const notification = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return {
                show: true,
                text: action.text
            };
        case 'HIDE_NOTIFICATION':
            return {
                show: false,
                text: state.text
            };
        default:
            return state;
    }
};

export default notification;
