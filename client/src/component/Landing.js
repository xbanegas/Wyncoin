import React, { Component } from 'react';
import Header from "./Header";
import Features from "./Features";
import Mission from "./Mission";
import MapPreview from "./MapPreview";
import Footer from "./Footer";

export default class Landing extends Component {
	render() {
		return (
			<div>
				<Header />
				<div class="primary-content t-border" id="about">
					<Features />
					<Mission />
				</div>
				<div class="secondary-content t-border group">
					<MapPreview />
				</div>
				<Footer />
			</div>

		);
	}

}