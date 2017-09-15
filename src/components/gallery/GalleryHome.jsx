import React from 'react';
import Plx from 'react-plx';

const GalleryHome = (props) => {
	//const thisImage = props.image;
	return(
		<div className="gallery-item">
			<Plx 
				className="Parallax"
				animateWhenNotInViewport={false}
				parallaxData={
					[{
						start: 0,
						duration: 2000,
						name: 'first',
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
					<img alt="" src={require("../../images/" + props.image + ".jpg")}/>
				</div>
			</Plx>
			<div className="description">
				<h3>{props.name}</h3>
				<p><i>{props.name}</i>{props.notes}</p>
			</div>
		</div>
	);
}

export default GalleryHome;