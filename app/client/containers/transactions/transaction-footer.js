import { connect } from 'react-redux';

import TransactionFooter from 'components/transactions/transaction-footer';
import { setFilter } from 'actions/transactions';
import { toggleLabels } from 'actions/labels';
import { edit } from 'actions/filter';

const mapState = ({ labels }, { transactionId }) => {
    const labelState = labels.find(label => label.id === transactionId);
    const isLabelsOpen = labelState && labelState.isOpen;

    return {
        isLabelsOpen
    };
};

const mapDispatch = (dispatch, ownProps) => {
    return {
        onSimilarCountClick: () => {
            dispatch(setFilter(ownProps.description));
            dispatch(edit(ownProps.description));
        },
        toggleLabels: () => {
            dispatch(toggleLabels(ownProps.transactionId));
        }
    };
};

export default connect(mapState, mapDispatch)(TransactionFooter);
