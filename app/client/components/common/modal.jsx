import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/common/modal';
import Labels from 'containers/modals/labels';
import Stats from 'containers/modals/stats';

const Modal = ({ page, show }) => (
    show ? (
        <div className="modal-container">
            {page === 'labels' && (
                <Labels />
            )}
            {page === 'stats' && (
                <Stats />
            )}
        </div>
    ) : null
);

export default Modal;

Modal.propTypes = {
    page: PropTypes.string,
    show: PropTypes.bool
};
