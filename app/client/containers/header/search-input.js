import { connect } from 'react-redux';

import { edit } from 'actions/filter';
import { setFilter } from 'actions/transactions';
import {
    open,
    close
} from 'actions/suggestions';
import SearchInput from 'components/header/search-input';

const mapDispatch = (dispatch) => {
    return {
        onChange: (value) => {
            dispatch(open());
            dispatch(edit(value));
        },
        onFocus: () => {
            dispatch(open());
        },
        onBlur: () => {
            dispatch(close());
        },
        search: (filter) => {
            dispatch(setFilter(filter));
            dispatch(close());
        }
    };
};

const mapState = ({ filter }) => {
    return {
        filter
    };
};

export default connect(mapState, mapDispatch)(SearchInput);
