import React, { Component } from 'react'
import '../css/sidebar.css';
import Map from './Map';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarLeftUncover extends Component {
	state = { visible: false }

	toggleVisibility = () => this.setState({ visible: !this.state.visible })

	render() {
		const { visible } = this.state
		return (
			<div className="map-body">
				<Sidebar.Pushable as={Segment}>
					<Button onClick={this.toggleVisibility} color="black">Menu</Button>
					<Sidebar
						as={Menu}
						animation='uncover'
						width='thin'
						visible={visible}
						icon='labeled'
						vertical
						inverted
					>
						<Menu.Item name='home'>
							<Icon name='home' />
							Home
            </Menu.Item>
						<Menu.Item name='gamepad'>
							<Icon name='gamepad' />
							Games
            </Menu.Item>
						<Menu.Item name='camera'>
							<Icon name='camera' />
							Channels
            </Menu.Item>
					</Sidebar>
					<Sidebar.Pusher>
						<Segment basic>
							<Map />
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		)
	}
}

export default SidebarLeftUncover