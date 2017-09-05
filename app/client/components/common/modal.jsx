import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/common/modal';
import Labels from 'containers/modals/labels';

const Modal = ({ page, show }) => (
    show ? (
        <div className="modal-container">
            {page === 'labels' && (
                <Labels />
            )}
        </div>
    ) : null
);

export default Modal;

Modal.propTypes = {
    page: PropTypes.string,
    show: PropTypes.bool
};
