import { connect } from 'react-redux';

import Labels from 'components/modals/labels';
import {
    getLabels,
    getFilteredTransactionsCount
} from 'selectors/transactions';
import {
    addLabelMultiple,
    removeLabelMultiple,
    setFilter
} from 'actions/transactions';
import { hide } from 'actions/modal';
import { show } from 'actions/notification';
import { edit } from 'actions/filter';

const mapState = (state) => {
    const itemCount = getFilteredTransactionsCount(state);
    const labels = getLabels(state).sort();

    return {
        itemCount,
        labels
    };
};

const mapDispatch = (dispatch) => {
    return {
        addLabel: (label) => {
            dispatch(addLabelMultiple(label));
            dispatch(hide('labels'));
            dispatch(show(`Label added: ${label}`));
        },
        removeLabel: (label) => {
            dispatch(removeLabelMultiple(label));
            dispatch(hide('labels'));
            dispatch(show(`Label removed: ${label}`));
        },
        showLabel: (label) => {
            dispatch(setFilter(label));
            dispatch(edit(label));
            dispatch(hide('labels'));
        }
    }
};

export default connect(mapState, mapDispatch)(Labels);
