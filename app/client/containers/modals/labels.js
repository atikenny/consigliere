import { connect } from 'react-redux';

import Labels from 'components/modals/labels';
import { getTransactionsCount, getTransactionIds } from 'selectors/transactions';
import { getUniqueLabels } from 'selectors/labels';
import { setFilter } from 'actions/transactions';
import { hide } from 'actions/modal';
import { show } from 'actions/notification';
import { edit } from 'actions/filter';
import {
    addLabelMultiple,
    removeLabelMultiple
} from 'actions/labels';

const mapState = (state) => {
    const itemCount = getTransactionsCount(state);
    const transactionIds = getTransactionIds(state);
    const labels = getUniqueLabels(state).sort();

    return {
        itemCount,
        labels,
        transactionIds
    };
};

const mapDispatch = (dispatch) => {
    return {
        addLabel: (label, transactionIds) => {
            dispatch(addLabelMultiple(label, transactionIds));
            dispatch(hide('labels'));
            dispatch(show(`Label added: ${label}`));
        },
        removeLabel: (label, transactionIds) => {
            dispatch(removeLabelMultiple(label, transactionIds));
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
