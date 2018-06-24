import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navigation extends Component {
	state = {}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state

		return (
			<Menu>
				<Menu.Item header position='right'>Our Company</Menu.Item>

				<Menu.Item
					name='aboutUs'
					active={activeItem === 'aboutUs'}
					onClick={this.handleItemClick}
				/>
				<Menu.Item name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
				<Menu.Item
					name='locations'
					active={activeItem === 'locations'}
					onClick={this.handleItemClick}
				/>
			</Menu>
		)
	}
}