import React from 'react';
import { connect } from 'react-redux';

import 'styles/components/header/search-suggestions';
import SearchSuggestions from 'components/header/search-suggestions';
import { concatUnique } from 'services/array-service';
import { edit } from 'actions/filter';
import { select } from 'actions/suggestions';

const mapState = ({ transactions, filter, suggestions }) => {
    const { isOpen } = suggestions;
    let suggestionList;

    if (filter) {
        suggestionList = transactions.reduce((_suggestions, transaction) => {
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
            dispatch(select(value));
            dispatch(edit(value));
        }
    }
};

export default connect(mapState, mapDispatch)(SearchSuggestions);
