import { connect } from 'react-redux';

import { toggle } from 'actions/menu';
import Header from 'components/header';

const mapState = ({ menu }) => {
    return {
        isMenuOpen: menu
    };
};

const mapDispatch = (dispatch) => {
    return {
        toggleMenu: () => {
            dispatch(toggle());
        }
    };
};

export default connect(mapState, mapDispatch)(Header);
