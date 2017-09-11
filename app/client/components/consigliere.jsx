import React from 'react';

import Header from 'containers/header';
import Content from 'containers/content';
import FileInput from 'containers/file-input';
import Transactions from 'containers/transactions';
import Notification from 'containers/common/notification';
import Modal from 'containers/common/modal';

const Consigliere = () => (
    <div id="consigliere">
        <Header />
        <Content>
            <FileInput />
            <Transactions />
            <Notification />
            <Modal />
        </Content>
    </div>
);

export default Consigliere;
