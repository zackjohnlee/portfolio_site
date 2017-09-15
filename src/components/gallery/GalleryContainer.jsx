import React from 'react';
import GalleryHome from './GalleryHome';


const GalleryContainer = (props) => {
  let galleryItems = props.data.map((item) => {
    return <GalleryHome name={item.name}
                        image={item.img_src}
                        notes={item.notes}
                        key={item.id} />
  }); 
  return (
    <div className="gallery-block">
        {galleryItems}    
    </div>
  );
}

export default GalleryContainer;