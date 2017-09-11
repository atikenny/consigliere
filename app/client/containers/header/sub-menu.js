import { connect } from 'react-redux';

import SubMenu from 'components/header/sub-menu';

const mapState = ({ menu }) => {
    return {
        show: menu
    };
};

export default connect(mapState)(SubMenu);
