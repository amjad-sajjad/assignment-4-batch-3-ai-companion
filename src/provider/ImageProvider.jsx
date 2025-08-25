import React, { useState } from 'react';
import { ImageContext } from '../context';


const ImageProvider = ({children}) => {
    const [images, setImages] = useState([]);
      const [singleImage, setSingleImage] = useState('');

  return (
    <ImageContext.Provider value={{images, setImages, singleImage, setSingleImage}}>
        {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;