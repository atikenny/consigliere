import { connect } from 'react-redux';

import TransactionFooter from 'components/transactions/transaction-footer';
import {
    setFilter,
    toggleLabels
} from 'actions/transactions';
import { edit } from 'actions/filter';

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

export default connect(null, mapDispatch)(TransactionFooter);
