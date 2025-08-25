import React, { useContext } from 'react';
import { ImageContext, SettingContext } from '../context';
import { fetchWithRetry } from '../utils/utility';




const useFetchImages = () => {

    const {setImages} = useContext(ImageContext);


    const fetchImages = async (newArray) => {
        await Promise.allSettled(
            newArray.map((item, index) =>
                new Promise((resolve) => {
                    setTimeout(async () => {

                        try {
                            const imageUrlData = await fetchWithRetry(item.imageUrl, 30000);
                            setImages((prev) => prev.map(img =>
                                img.id === item.id ? {
                                    ...img,
                                    imageUrl:imageUrlData,
                                    isLoading:false,
                                    hasError:null
                                } : img
                            ));

                        } catch (err) {
                            setImages(prev => prev.map(img =>
                                img.id ===item.id ? {
                                    ...img,
                                    imageUrl:null,
                                    isLoading:false,
                                    hasError:err
                                } : img

                            ))
                        }
                        resolve()

                    }, index * 200);
                }))
        )
    }



    return fetchImages;
};

export default useFetchImages;