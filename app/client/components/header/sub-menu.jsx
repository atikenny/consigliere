import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/header/sub-menu';
import FileInput from 'containers/common/file-input';

const getClassName = (show) => {
    let className = 'sub-menu-container';

    if (show) {
        className += ' show';
    }

    return className;
}

const SubMenu = ({ show }) => (
    <div className={getClassName(show)}>
        <ul>
            <li>
                <FileInput />
            </li>
        </ul>
    </div>
);

export default SubMenu;

SubMenu.propTypes = {
    show: PropTypes.bool
};
