import React from 'react';

import 'styles/components/header';
import IconButton from 'components/common/icon-button';
import SearchInput from 'containers/header/search-input';

const Header = () => (
    <header>
        <h1>Consigliere</h1>
        <SearchInput />
        <div className="controllers">
            <IconButton type="price-tags" />
        </div>
    </header>
);

export default Header;
