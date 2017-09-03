import React from 'react';

import Header from 'components/header';
import FileInput from 'containers/file-input';
import Transactions from 'containers/transactions';
import Notification from 'containers/common/notification';

const Consigliere = () => (
    <div id="consigliere">
        <Header />
        <FileInput />
        <Transactions />
        <Notification />
    </div>
);

export default Consigliere;
