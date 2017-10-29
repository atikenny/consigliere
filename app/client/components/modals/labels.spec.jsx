import React from 'react';
import { shallow } from 'enzyme';

import Labels from './labels';

describe('Labels component', () => {
    test('has labels modal container', () => {
        const SUT = shallow(<Labels labels={[]} />);
        const container = SUT.find('.labels-modal-container');

        expect(container.length).toBe(1);
    });

    test('has a title heading', () => {
        const SUT = shallow(<Labels labels={[]} />);
        const title = SUT.find('.labels-modal-container h2').at(0);

        expect(title.text()).toBe('Choose a label to view, remove or apply:');
    });

    describe('labels list', () => {
        test('has a text span', () => {
            const labels = ['label 1'];
            const SUT = shallow(<Labels labels={labels} />);
            const labelsList = SUT.find('.labels-modal-container .labels');
            const labelItems = labelsList.find('.item');
            const firstLabel = labelItems.at(0);
            const firstText = firstLabel.find('.text');

            expect(firstText.text()).toBe(labels[0]);
        });

        test('has a show label button', () => {
            const labels = ['label 1'];
            const showLabel = jest.fn();
            const SUT = shallow(<Labels labels={labels} showLabel={showLabel} />);
            const labelsList = SUT.find('.labels-modal-container .labels');
            const labelItems = labelsList.find('.item');
            const firstLabel = labelItems.at(0);
            const showLabelButton = firstLabel.find('IconButton[type="eye"]');

            showLabelButton.simulate('click');

            expect(showLabel).toHaveBeenCalledWith(labels[0]);
        });

        test('has a remove label button', () => {
            const labels = ['label 1'];
            const transactionIds = ['transactionIds'];
            const removeLabel = jest.fn();
            const SUT = shallow(
                <Labels
                    labels={labels}
                    removeLabel={removeLabel}
                    transactionIds={transactionIds} />
            );
            const labelsList = SUT.find('.labels-modal-container .labels');
            const labelItems = labelsList.find('.item');
            const firstLabel = labelItems.at(0);
            const removeLabelButton = firstLabel.find('IconButton[type="minus"]');

            removeLabelButton.simulate('click');

            expect(removeLabel).toHaveBeenCalledWith(labels[0], transactionIds);
        });

        test('has a add label button', () => {
            const labels = ['label 1'];
            const transactionIds = ['transactionIds'];
            const addLabel = jest.fn();
            const SUT = shallow(
                <Labels
                    labels={labels}
                    addLabel={addLabel}
                    transactionIds={transactionIds} />
            );
            const labelsList = SUT.find('.labels-modal-container .labels');
            const labelItems = labelsList.find('.item');
            const firstLabel = labelItems.at(0);
            const addLabelButton = firstLabel.find('IconButton[type="plus"]');

            addLabelButton.simulate('click');

            expect(addLabel).toHaveBeenCalledWith(labels[0], transactionIds);
        });
    });


    test('has an item count heading', () => {
        const itemCount = 123;
        const SUT = shallow(<Labels labels={[]} itemCount={itemCount} />);
        const itemCountHeading = SUT.find('.labels-modal-container h2').at(1);

        expect(itemCountHeading.text()).toBe(`The changes will affect ${itemCount} items.`);
    });
});
