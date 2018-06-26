import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import '../css/navigation.css';

export default class Navigation extends Component {
	state = {}

	handleItemClick = (e, { name }) => {
		// this.setState({ activeItem: name })
		console.log(name);
		if (name === "main" ) {
			this.props.history.push('/');
		} else {
			this.props.history.push('/signup');
		}
	}

	render() {
		const { activeItem } = this.state

		return (
			<Menu id="navbar">
				<div>
				<Menu.Item header position='right' name="main" onClick={this.handleItemClick}>Our Company</Menu.Item>
				</div>
				<div>
				<Menu.Item
					name='aboutUs'
					active={activeItem === 'aboutUs'}
					href="#about"
				/>
				</div>
				<div>
				<Menu.Item name='log in' active={activeItem === 'log in'} onClick={this.handleItemClick} />
				</div>
				<div>
				<Menu.Item
					name='sign up'
					active={activeItem === 'sign up'}
					onClick={this.handleItemClick}
				/>
				</div>
			</Menu>
		)
	}
}