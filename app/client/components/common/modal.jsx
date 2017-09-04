import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/common/modal';

const Modal = ({ children }) => (
    children ? (
        <div className="modal-container">{children()}</div>
    ) : null
);

export default Modal;

Modal.propTypes = {
    children: PropTypes.func
};
