import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/common/notification';

const Notification = ({ notification }) => (
    notification ? (
        <div className="notification">{notification}</div>
    ) : null
);

export default Notification;

Notification.propTypes = {
    notification: PropTypes.string
};
