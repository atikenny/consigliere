import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/content';

const getContainerClassName = (isModalShown) => {
    let containerClassName = 'content';

    if (isModalShown) {
        containerClassName += ` modal`;
    }

    return containerClassName;
};

const Content = ({ children, isModalShown }) => (
    <div className={getContainerClassName(isModalShown)}>
        {children}
    </div>
);

export default Content;

Content.propTypes = {
    children: PropTypes.array,
    isModalShown: PropTypes.bool
};
