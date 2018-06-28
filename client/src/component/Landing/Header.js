import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<header id="top" class="main-header">
				<span class="title">Everybody Wins.</span>
				<h1>Wyncoin</h1>
				{/* <img class="arrow" src="img/arrow.svg" alt="Down arrow" /> */}
			</header>
		)
	}
}