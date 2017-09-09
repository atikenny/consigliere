import { connect } from 'react-redux';

import Suggestions from 'containers/common/suggestions';
import { concatUnique } from 'services/array-service';
import { edit } from 'actions/filter';
import { setFilter } from 'actions/transactions';

const mapState = ({ transactions, filter }) => {
    const { items } = transactions;
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
        suggestions: suggestionList
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

export default connect(mapState, mapDispatch)(Suggestions);
