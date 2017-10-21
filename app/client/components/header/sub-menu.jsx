import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/header/sub-menu';
import FileInput from 'containers/common/file-input';
import Button from 'components/common/button';

const getClassName = (show) => {
    let className = 'sub-menu-container';

    if (show) {
        className += ' show';
    }

    return className;
}

const SubMenu = ({ show, sortByDate }) => (
    <div className={getClassName(show)}>
        <ul className="sub-menu">
            <li>
                <FileInput />
            </li>
            <li>
                <Button text="Sort by date" onClick={sortByDate} />
            </li>
        </ul>
    </div>
);

export default SubMenu;

SubMenu.propTypes = {
    show: PropTypes.bool,
    sortByDate: PropTypes.func
};
