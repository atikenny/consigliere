import { connect } from 'react-redux';

import Stats from 'components/modals/stats';
import { getLabelsStats } from 'selectors/transactions';

const mapState = (state) => {
    return {
        labelsGroup: getLabelsStats(state),
        currency: state.currency
    };
};

export default connect(mapState)(Stats);
