import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

// test that Notification renders without crashing
describe('Notification tests', () => {
	it('renders Notification component without crashing', () => {
		const component = shallow(<Notifications />);

		expect(component).toBeDefined();
	});

    // verify that Notification renders an unordered list of Notifications
	it('renders ul', () => {
		const component = shallow(<Notifications />);

		expect(component.find('ul')).toBeDefined();
	});

    // verify that Notification renders a div with the class App-body
	it('renders three list items', () => {
		const component = shallow(<Notifications />);

		expect(component.find('li')).toHaveLength(3);
	});

     // verify that Notification renders a paragraph with the text 'Here is the list of notifications'
	it('renders correct text', () => {
		const component = shallow(<Notifications />);

		expect(component.find('p').prop('children')).toBe(
			'Here is the list of notifications'
		);
	});
});
