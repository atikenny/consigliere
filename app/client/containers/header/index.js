import { connect } from 'react-redux';

import { toggle } from 'actions/menu';
import Header from 'components/header';

const mapDispatch = (dispatch) => {
    return {
        toggleMenu: () => {
            dispatch(toggle());
        }
    };
};

export default connect(null, mapDispatch)(Header);
