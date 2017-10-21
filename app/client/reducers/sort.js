export const SORT_TYPES = {
    DEFAULT: 'default',
    BY_DATE: 'by-date'
};

const sort = (state = SORT_TYPES.DEFAULT, action) => {
    switch (action.type) {
        case 'SORT_BY_DATE':
            return SORT_TYPES.BY_DATE;
        default:
            return state;
    }
};

export default sort;
