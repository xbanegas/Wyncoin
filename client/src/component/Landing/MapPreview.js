import React, { Component } from 'react';


export default class MapPreview extends Component {
	render() {
		return (
			<div>
				<div class="resorts">
					<img src="/img/resort.jpg" alt="Resort" />
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
				<div class="tips">
					<img src={`${process.env.PUBLIC_URL}/img/mtn-landscape.jpg`} alt="Mountain Landscape" />
					<h3>Pack Accordingly</h3>
					<p>
						One of most important things when it comes to traveling through the great outdoors is packing accordingly. Here are a few
						tips:
					</p>
					<ol>
						<li>Bring layers of clothing</li>
						<li>Pack sunscreen</li>
						<li>Carry extra water just in case</li>
						<li>Pack light</li>
					</ol>

				</div>
			</div>
		)
	}
}


