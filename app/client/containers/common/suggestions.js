import { connect } from 'react-redux';

import Suggestions from 'components/common/suggestions';
import { isSuggestionOpen } from 'selectors/suggestions';

const mapState = (state, { suggestionId }) => {
    return {
        isOpen: isSuggestionOpen(state, suggestionId)
    };
};

export default connect(mapState)(Suggestions);
