import React from 'react';
import {NavLink} from 'react-router-dom';
import {Sticky} from './ui/sticky.js';
import ImageParallax from './Parallax';

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
		<div className="image-container">
			<ImageParallax alt="Hero" reduceHeight={1/4} src={require("../images/zackarteles.jpg")} />
		</div>
	</header>
);

export default Header;