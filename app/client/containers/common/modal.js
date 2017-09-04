import { connect } from 'react-redux';

import Labels from 'components/modals/labels';
import Modal from 'components/common/modal';
import { getLabels } from 'selectors/transactions';

const mapState = (state) => {
    const { modal } = state;
    let children = null;

    if (modal.show) {
        if (modal.page === 'labels') {
            const labels = getLabels(state);

            children = Labels({ labels });
        }
    }

    return {
        children
    };
};

export default connect(mapState)(Modal);
