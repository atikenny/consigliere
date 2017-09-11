import React from 'react';

import 'styles/components/header';
import IconButton from 'components/common/icon-button';
import SearchInput from 'containers/header/search-input';
import Controllers from 'containers/header/controllers';

const Header = () => (
    <header>
        <IconButton className="menu-button" type="menu" />
        <SearchInput suggestionId="header-search" />
        <Controllers />
    </header>
);

export default Header;
