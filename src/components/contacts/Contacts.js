import React, { Component } from 'react';

import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
	state = {
		contacts: [
			{
				id: 1,
				name: 'John Doe',
				email: 'jdoe@gmail.com',
				phone: '555-555-5555'
			},
			{
				id: 2,
				name: 'Jane Doe',
				email: 'janeDoe@gmail.com',
				phone: '111-333-5423'
			},
			{
				id: 3,
				name: 'Jack Doe',
				email: 'JackDoe@gmail.com',
				phone: '123-421-4223'
			}
		]
	};

	render() {
		return (
			<Consumer>
				{(value) => {
					const { contacts } = value;
					return (
						<React.Fragment>
							<h1 className="display-4 mb-2">
								<span className="text-danger">Contact</span> List
							</h1>
							{contacts.map((contact) => <Contact key={contact.id} contact={contact} />)}
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default Contacts;
