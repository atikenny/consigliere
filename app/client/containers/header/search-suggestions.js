import { connect } from 'react-redux';

import 'styles/components/header/search-suggestions';
import SearchSuggestions from 'components/header/search-suggestions';
import { concatUnique } from 'services/array-service';
import { edit } from 'actions/filter';
import { setFilter } from 'actions/transactions';

const mapState = ({ transactions, filter, suggestions }) => {
    const { items } = transactions;
    const { isOpen } = suggestions;
    let suggestionList;

    if (filter) {
        suggestionList = items.reduce((_suggestions, transaction) => {
            const labels = transaction.labels || [];
            const matchingLabels = labels.filter(label => {
                return label.indexOf(filter) !== -1;
            });

            return concatUnique(_suggestions, matchingLabels);
        }, []);
    }

    return {
        suggestions: suggestionList,
        isOpen
    };
};

const mapDispatch = (dispatch) => {
    return {
        onItemClick: (value) => {
            dispatch(setFilter(value));
            dispatch(edit(value));
        }
    }
};

export default connect(mapState, mapDispatch)(SearchSuggestions);
