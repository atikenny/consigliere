import React from 'react';
import { shallow } from 'enzyme';

import Icon from './icon';

describe('Icon compoennt', () => {
    test('has an icon with the provided type', () => {
        const type = 'type';
        const iconComponent = shallow(<Icon type={type} />);
        const icon = iconComponent.find('.icon');

        expect(icon.hasClass(type)).toBe(true);
    });
});
