import { connect } from 'react-redux';

import { show, hide } from 'actions/modal';
import Controllers from 'components/header/controllers';

const mapState = ({ modal }) => {
    const { show, page } = modal;

    return {
        isLabelsActive: show && page === 'labels',
        isStatsActive: show && page === 'stats'
    };
};

const mapDispatch = (dispatch) => {
    return {
        showLabels: () => {
            dispatch(show('labels'));
        },
        hideLabels: () => {
            dispatch(hide());
        },
        showStats: () => {
            dispatch(show('stats'));
        },
        hideStats: () => {
            dispatch(hide());
        }
    };
};

export default connect(mapState, mapDispatch)(Controllers);
