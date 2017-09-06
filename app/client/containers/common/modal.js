import { connect } from 'react-redux';

import Modal from 'components/common/modal';

const mapState = ({ modal }) => {
    return {
        page: modal.page,
        show: modal.show
    };
};

export default connect(mapState)(Modal);
