import React from 'react';
import ImageParallax from './Parallax';

const About = () => (  
	<div className="about-main-content">
		<div className="page-title">
			<h1>Biography</h1>
		</div>
		<div className="image-container">
			<ImageParallax 
				reduceHeight={.25} 
				src={require("../images/headshot.jpg")}/>
		</div>
		<p>Zack John Lee is an artist whose work focuses on the human experience of art. Particularly concerned with how art can facilitate shared experiences, Lee's art explores drawing, installation, sound/music, and the integration of technology to create and interactive environment.</p>
	</div>
);

export default About;