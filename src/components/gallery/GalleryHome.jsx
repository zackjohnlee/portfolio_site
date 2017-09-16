import React from 'react';
import ImageParallax from 'react-image-parallax2';

const GalleryHome = (props) => {
	//const thisImage = props.image;
	return(
		<div className="gallery-item">
			<div className="image-container">
				<ImageParallax 
					reduceHeight={1/4} 
					src={require("../../images/" + props.image + ".jpg")}/>
			</div>
			<div className="description">
				<h2>{props.name}</h2>
				<p><i>{props.name}</i>{props.notes}</p>
			</div>
		</div>
	);
}

export default GalleryHome;