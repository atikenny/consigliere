import { connect } from 'react-redux';

import FileInput from 'components/common/file-input';
import { load } from 'actions/transactions';

const mapDispatch = (dispatch) => {
    return {
        onLoad: (transactions) => {
            dispatch(load(transactions));
        }
    };
};

export default connect(null, mapDispatch)(FileInput);
