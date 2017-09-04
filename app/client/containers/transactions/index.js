import { connect } from 'react-redux';

import Transactions from 'components/transactions';
import { getFilteredTransactions } from 'selectors/transactions';

const mapState = (state) => {
    const isModalActive = state.modal.show;

    return {
        transactions: getFilteredTransactions(state),
        isModalActive
    };
};

export default connect(mapState)(Transactions);
