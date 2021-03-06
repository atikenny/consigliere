import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/header';
import IconButton from 'components/common/icon-button';
import SearchInput from 'containers/header/search-input';
import Controllers from 'containers/header/controllers';
import SubMenu from 'containers/header/sub-menu';

const Header = ({ toggleMenu }) => (
    <header>
        <div className="main">
            <IconButton
                className="menu-button"
                type="menu"
                onClick={toggleMenu} />
            <SearchInput suggestionId="header-search" />
            <Controllers />
        </div>
        <SubMenu />
    </header>
);

export default Header;

Header.propTypes = {
    toggleMenu: PropTypes.func
};
