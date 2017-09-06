import { connect } from 'react-redux';

import { toggle } from 'actions/modal';
import Header from 'components/header';

const mapDispatch = (dispatch) => {
    return {
        toggleLabels: () => {
            dispatch(toggle('labels'));
        }
    };
};

export default connect(null, mapDispatch)(Header);
