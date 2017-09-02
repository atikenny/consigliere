import React from 'react';

import 'styles/components/header';
import IconButton from 'components/icon-button';
import SearchInput from 'containers/header/search-input';

const Header = () => (
    <header>
        <h1>Consigliere</h1>
        <SearchInput />
        <div className="controllers">
            <IconButton type="cog" />
        </div>
    </header>
);

export default Header;
