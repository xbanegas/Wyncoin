import React, { Component } from 'react';
import '../../css/features.css'

export default class Features extends Component {
	render() {
		return (
			<div>
				<div class="features">
					<div class="feature" id="feature1">
						<div class="feature-icon">
							<img src="/img/maps-and-flags.png" alt="Phone" />
						</div>
						<h3>Meet up and Trade crypto</h3>
						<div class="feature-text">

							<p>Link to users in the community and decide how you choose to offer or accept payment.</p>
						</div>
					</div>
					<div class="feature" id="feature2">
						<div class="feature-icon" >
							<img src="/img/navigation.png" alt="Phone" />
						</div>
						<h3>Local BTMs and Vendors</h3>
						<div class="feature-text">
							<p>Save yourself the time and buy bitcoin on the go.</p>
						</div>
					</div>
					<div class="feature" id="feature3">
						<div class="feature-icon">
							<img src="/img/hierarchical-structure.png" alt="Phone" />
						</div>
						<h3>Rate and Review Users</h3>

						<div class="feature-text">
							<p>Credibility in your direct transactions are important when purchasing your digital assets. </p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

