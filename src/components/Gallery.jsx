import React from 'react';
import NavButton from './ui/navbutton.jsx';
import Plx from 'react-plx';
import GalleryContainer from './gallery/GalleryContainer';
import {galleryHomeData} from '../data/galleryHomeData'

const Gallery = ({match}) => { 
	return(
		<div className="main-content">
			<NavButton enter='100' />
			<div className="page-title">
				<h1>Selected Works</h1>
			</div>
			<GalleryContainer data={galleryHomeData}/>
		</div>
	);
}

export default Gallery;