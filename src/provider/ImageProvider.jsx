import React, { useState } from 'react';
import { ImageContext } from '../context';


const ImageProvider = ({children}) => {
    const [images, setImages] = useState([]);
  return (
    <ImageContext.Provider value={{images, setImages}}>
        {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;