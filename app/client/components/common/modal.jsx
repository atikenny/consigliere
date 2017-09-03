import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/common/modal';

const Modal = ({ children }) => (
    <div className="modal-container">{children}</div>
);

export default Modal;

Modal.propTypes = {
    children: PropTypes.object
};
