import React from 'react';

import 'styles/components/header/search-input';
import Icon from 'components/icon';

const FilterInput = () => (
    <div className="search-container">
        <Icon type="search" />
        <input className="search-input" type="text" />    
    </div>
);

export default FilterInput;
