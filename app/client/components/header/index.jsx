import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/header';
import IconButton from 'components/common/icon-button';
import SearchInput from 'containers/header/search-input';

const Header = ({ toggleLabels }) => (
    <header>
        <h1>Consigliere</h1>
        <SearchInput />
        <div className="controllers">
            <IconButton type="price-tags" onClick={toggleLabels} />
        </div>
    </header>
);

export default Header;

Header.propTypes = {
    toggleLabels: PropTypes.func
};
