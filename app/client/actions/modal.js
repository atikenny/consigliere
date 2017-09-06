export const show = (page) => {
    return {
        type: 'SHOW_MODAL',
        page
    };
};

export const hide = () => {
    return {
        type: 'HIDE_MODAL'
    };
};
