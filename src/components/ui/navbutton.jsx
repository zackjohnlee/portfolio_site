import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Sticky} from './sticky.js';
import {galleryHomeData} from '../../data/galleryHomeData';
import PropTypes from 'prop-types';

const NavButton = (props) => {

	let subList = galleryHomeData.map((item) => {
		return(
			<li key={item.id}><NavLink to={`/gallery/${item.img_src}`}>{item.name.toUpperCase()}</NavLink></li>
		);
	});

	return(
		<Sticky className="sticky-sub-nav" enter={props.enter}>
			<div className="menu">
				<input type="checkbox" id="expander"/>
				<label htmlFor="expander">
					<div className="menu-bar"></div>
					<div className="menu-bar"></div>
					<div className="menu-bar"></div>
				</label>
				<div className="expandee">
					<ul>
						<li><NavLink exact to="/">HOME</NavLink></li>
						<li><NavLink to="/about">ABOUT</NavLink></li>
						<li><NavLink to="/gallery">GALLERY &#9660; </NavLink></li>
						<ul className="sub-list">
							{subList}
						</ul>
					</ul>
				</div>
			</div>
		</Sticky>
	);
};

export default NavButton;

NavButton.propTypes = {
	enter: PropTypes.string
}