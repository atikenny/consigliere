import React from 'react';

import 'styles/components/header';
import IconButton from 'components/icon-button';

const Header = () => (
    <header>
        <h1>Consigliere</h1>
        <div className="controllers">
            <IconButton type="cog" />
        </div>
    </header>
);

export default Header;
