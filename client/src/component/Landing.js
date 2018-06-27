import React, { Component } from 'react';
import Header from "./Landing/Header";
import Features from "./Landing/Features";
import Mission from "./Landing/Mission";
import MapPreview from "./Landing/MapPreview";
import Footer from "./Landing/Footer";

export default class Landing extends Component {
	render() {
		return (
			<div>
				<Header />

				<Features />
				<Mission />


				<MapPreview />

				<Footer />
			</div>

		);
	}

}