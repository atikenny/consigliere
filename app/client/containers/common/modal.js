import { connect } from 'react-redux';

import Labels from 'components/modals/labels';
import Modal from 'components/common/modal';

const modals = {
    labels: Labels
};

const mapState = ({ modal }) => {
    const children = modal.show ? modals[modal.page] : null;

    return {
        children
    };
};

export default connect(mapState)(Modal);
