import React from 'react';
import {NavLink} from 'react-router-dom';
import {Sticky} from './sticky.js';
import PropTypes from 'prop-types';

const NavButton = (props) => {

	let subItems = ['gallery1', 'gallery2', 'gallery3']; 
	let subList = subItems.map((item) => {
		return(
			<li key={item}><NavLink to={`gallery#${item}`}>{item}</NavLink></li>
		);
	});

	return(
		<Sticky className="sticky-sub-nav" enter={props.enter}>
			<div className="menu">
				<input type="checkbox" id="expander" />
				<label htmlFor="expander">
					<div className="menu-bar"></div>
					<div className="menu-bar"></div>
					<div className="menu-bar"></div>
				</label>
				<div className="expandee">
					<ul>
						{subList}
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