import React from 'react';

import 'styles/components/header';
import SearchInput from 'containers/header/search-input';
import Controllers from 'containers/header/controllers';

const Header = () => (
    <header>
        <h1>Consigliere</h1>
        <SearchInput />
        <Controllers />
    </header>
);

export default Header;
