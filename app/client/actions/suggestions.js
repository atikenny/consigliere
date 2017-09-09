export const open = (id) => {
    return {
        type: 'OPEN_SUGGESTIONS',
        id
    };
};

export const close = (id) => {
    return {
        type: 'CLOSE_SUGGESTIONS',
        id
    };
};
