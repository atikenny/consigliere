import { connect } from 'react-redux';

import Content from 'components/content';

const mapState = ({ modal }) => {
    const isModalShown = modal.show;

    return {
        isModalShown
    };
};

export default connect(mapState)(Content);
