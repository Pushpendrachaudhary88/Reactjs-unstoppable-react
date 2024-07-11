import React from "react"


const ImageItem = ({images}) =>{


    return(
        <div className="imageItem">
           
        {images.map((image, index) => (
            <img key={image.id} src={image.urls.thumb} alt={image.alt_description}/>
            // <img key={index} src={image.urls.thumb} alt={image.alt_description}/>
            // https://www.npmjs.com/package/uuid
        ))}
    </div>


    )

}

export default ImageItem