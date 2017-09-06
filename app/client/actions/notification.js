const hideTimeout = 2000;

const hide = () => {
    return {
        type: 'HIDE_NOTIFICATION'
    };
};

export const show = (text) => {
    return dispatch => {
        dispatch({
            type: 'SHOW_NOTIFICATION',
            text
        });

        setTimeout(() => {
            dispatch(hide());
        }, hideTimeout);
    };
};
