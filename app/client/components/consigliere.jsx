import React from 'react';

import Header from 'containers/header';
import Content from 'containers/content';
import Transactions from 'containers/transactions';
import Notification from 'containers/common/notification';
import Modal from 'containers/common/modal';

const Consigliere = () => (
    <div id="consigliere">
        <Header />
        <Content>
            <Transactions />
            <Notification />
            <Modal />
        </Content>
    </div>
);

export default Consigliere;
