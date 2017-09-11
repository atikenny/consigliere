import { connect } from 'react-redux';

import { edit } from 'actions/filter';
import { setFilter } from 'actions/transactions';
import {
    open,
    close
} from 'actions/suggestions';
import SearchInput from 'components/header/search-input';

const mapDispatch = (dispatch, ownProps) => {
    return {
        onChange: (value) => {
            dispatch(open(ownProps.suggestionId));
            dispatch(edit(value));
        },
        onFocus: () => {
            dispatch(open(ownProps.suggestionId));
        },
        onBlur: () => {
            dispatch(close(ownProps.suggestionId));
        },
        search: (filter) => {
            dispatch(setFilter(filter));
            dispatch(close(ownProps.suggestionId));
        }
    };
};

const mapState = ({ filter }) => {
    return {
        filter
    };
};

export default connect(mapState, mapDispatch)(SearchInput);
