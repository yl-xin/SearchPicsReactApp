import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props)=> {
    // console.log(props.images);
    const images= props.images.map((image)=>{
        return <ImageCard key={image.id} image={image} />
    });
    // ES6 JS object destructuring: destructue the image object {id,urls,description}
    // const images= props.images.map(({id,urls,description})=>{
    //     return <img key={id} src={urls.regular} alt={description}/>
    // });
    return <div className="image-list">{images} </div>
}

export default ImageList;