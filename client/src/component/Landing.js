import React, { Component } from 'react';
import Navigation from './Navigation';

export default class Landing extends Component {
	render() {
		return (
			<div>
				<header id="top" class="main-header">
					<Navigation />
					<span class="title">Everybody Wins.</span>
					<h1>Wyncoin</h1>
					<img class="arrow" src="img/arrow.svg" alt="Down arrow" />
				</header>

				<div class="primary-content t-border">
					<p class="intro">
						At Wyncoin your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.
    			</p>
					<a class="callout" href="#more">Find out more</a>

					<div class="wildlife">
						<h2>Connect With Local Users</h2>
						<p>
							As spawning season approaches, the fish acquire a humpback and protuberant jaw. After spawning, they die and their carcasses
							provide a feast for gatherings of
            <a href="#mink"> mink</a>,
            <a href="#bears">bears</a>, and
            <a href="#eagles">bald eagles</a>.
        </p>
					</div>
					{/* <!-- End .wildlife --> */}

					<a class="callout" href="#wildlife">See the Wildlife</a>
				</div>
				{/* <!-- End .primary-content --> */}

				<div class="secondary-content t-border group">
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


				{/* <!-- End .secondary-content --> */}

				<footer class="main-footer">
					<p>All rights reserved to the state of
        <a href="#">California</a>.</p>
					<a href="#top">Back to top &raquo;</a>
				</footer>
			</div>

		);
	}

}