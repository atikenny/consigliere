const currency = (state = '£', action) => {
    switch (action.type) {
        case 'SWITCH_CURRENCY':
            return action.currency;
        default:
            return state;
    }
};

export default currency;
