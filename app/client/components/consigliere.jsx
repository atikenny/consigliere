import React from 'react';

import Header from 'components/header';
import FileInput from 'containers/file-input';
import Transactions from 'containers/transactions';

const Consigliere = () => (
    <div id="consigliere">
        <Header />
        <FileInput />
        <Transactions />
    </div>
);

export default Consigliere;
