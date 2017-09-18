import React from 'react';
import {NavLink} from 'react-router-dom';
import ImageParallax from './Parallax';
import NavButton from './ui/navbutton';

const Header = () => (  
	<header >
		<h1>Hero Title</h1>
		<ul className="main-nav">
			<li><NavLink exact to="/">HOME</NavLink></li>
			<li><NavLink to="/gallery">GALLERY</NavLink></li>
			<li><NavLink to="/about">ABOUT</NavLink></li>
		</ul>
		<NavButton enter='120' />
		<div className="image-container">
			<ImageParallax alt="Hero" reduceHeight={1/4} src={require("../images/zackarteles.jpg")} />
		</div>
	</header>
);

export default Header;