const notification = (state = '', action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return action.notification;
        case 'HIDE_NOTIFICATION':
            return '';
        default:
            return state;
    }
};

export default notification;
