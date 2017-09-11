import React from 'react';
import PropTypes from 'prop-types';

const SubMenu = ({ show }) => (
    show ? (
        <div className="sub-menu-container" />
    ) : null
);

export default SubMenu;

SubMenu.propTypes = {
    show: PropTypes.bool
};
