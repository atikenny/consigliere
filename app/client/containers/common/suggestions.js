import { connect } from 'react-redux';

import Suggestions from 'components/common/suggestions';

const mapState = ({ suggestions }, { suggestionId }) => {
    const suggestion = suggestions.find(suggestion => suggestion.id === suggestionId);
    const isOpen = suggestion.isOpen || false;

    return {
        isOpen
    };
};

export default connect(mapState)(Suggestions);
