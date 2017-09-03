import { connect } from 'react-redux';

import Notification from 'components/common/notification';

const mapState = ({ notification }) => {
    return {
        text: notification
    };
};

export default connect(mapState)(Notification);
