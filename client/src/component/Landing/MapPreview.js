import React, { Component } from 'react';
import '../../css/mapPreview.css';

export default class MapPreview extends Component {
	render() {
		return (
			<div id="mapPreview">
				<div class="mapDescription">
					<h3>From Tents to Resorts</h3>
					<p>
						Lake Tahoe is full of wonderful places to stay. You have the ability to sleep in the outdoors in a tent, or relax like a
						king at a five star resort. Here are our top three resorts:
				</p>
					<ul>
						<li>
							<a href="#hotels">Lake Tahoe Resort Hotel</a>
						</li>
						<li>
							<a href="#resorts">South Lake Tahoe Resorts</a>
						</li>
						<li>
							<a href="#lodging">Tahoe Ski Resort Lodging</a>
						</li>
					</ul>
				</div>
				<div class="map">
					<img src={`${process.env.PUBLIC_URL}/img/map.png`} alt="map" />
				</div>
			</div>
		)
	}
}


