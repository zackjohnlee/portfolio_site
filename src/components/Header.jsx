import React from 'react';
import {NavLink} from 'react-router-dom';
import Plx from 'react-plx';
import {Sticky} from './ui/sticky.js';

const Header = () => (  
	<header >
		<h1>Hero Title</h1>
		<Sticky className="sticky-nav" enter="95">
			<ul className="main-nav">
				<li><NavLink exact to="/">HOME</NavLink></li>
				<li><NavLink exact to="/gallery">GALLERY</NavLink></li>
				<li><NavLink exact to="/about">ABOUT</NavLink></li>
			</ul>
		</Sticky>
		<Plx 
			className="heroParallax"
			animateWhenNotInViewport={false}
			parallaxData={
				[{
					start: 0,
					duration: 500,
					name: 'hero',
					properties:[
						{
						startValue: 0,
						endValue: 100,
						unit: '%',
						property: 'translateY'
						}
					]
				}]
			}>
			<div className="image-container">
				<img alt="Hero" src={require("../images/zackarteles.jpg")} />
			</div>
		</Plx>
	</header>
);

export default Header;