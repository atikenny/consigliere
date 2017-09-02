import { connect } from 'react-redux';

import TransactionFooter from 'components/transactions/transaction-footer';
import { toggleLabels } from 'actions/transactions';

const mapDispatch = (dispatch, ownProps) => {
    return {
        toggleLabels: () => {
            dispatch(toggleLabels(ownProps.transactionId));
        }
    };
};

export default connect(null, mapDispatch)(TransactionFooter);
