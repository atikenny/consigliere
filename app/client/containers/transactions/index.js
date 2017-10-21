import { connect } from 'react-redux';

import Transactions from 'components/transactions';
import { getTransactions } from 'selectors/transactions';

const mapState = (state) => {
    return {
        transactions: getTransactions(state)
    };
};

export default connect(mapState)(Transactions);
