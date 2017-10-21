import { connect } from 'react-redux';

import SubMenu from 'components/header/sub-menu';
import { byDate } from 'actions/sort';

const mapState = ({ menu }) => {
    return {
        show: menu
    };
};

const mapDispatch = (dispatch) => {
    return {
        sortByDate: () => {
            dispatch(byDate());
        }
    };
};

export default connect(mapState, mapDispatch)(SubMenu);
