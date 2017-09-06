import { connect } from 'react-redux';

import Notification from 'components/common/notification';

const mapState = ({ notification }) => {
    return {
        show: notification.show,
        text: notification.text
    };
};

export default connect(mapState)(Notification);
