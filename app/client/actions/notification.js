const hideTimeout = 2000;

const hide = () => {
    return {
        type: 'HIDE_NOTIFICATION'
    };
};

export const show = (notification) => {
    return dispatch => {
        dispatch({
            type: 'SHOW_NOTIFICATION',
            notification
        });

        setTimeout(() => {
            dispatch(hide());
        }, hideTimeout);
    };
};
