import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/common/notification';

const getContainerClassName = (show) => {
    let className = 'notification';

    if (show) {
        className += ` show`;
    }

    return className;
};

const Notification = ({ show, text }) => (
    <div className={getContainerClassName(show)}>
        {text}
    </div>
);

export default Notification;

Notification.propTypes = {
    show: PropTypes.bool,
    text: PropTypes.string
};
