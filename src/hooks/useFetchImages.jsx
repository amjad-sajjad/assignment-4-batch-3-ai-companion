import React, { useContext } from 'react';
import { ImageContext, SettingContext } from '../context';



const fetchWithRetry = async (url, timeout = 10000, retry = 2) => {
    try {
        return await fetchSingleImage(url, timeout)
    } catch (err) {
        if (retry > 0) {
            return fetchWithRetry(url, timeout, retry - 1)
        }
        else {
            throw new Error(err)
        }
    }

}

const fetchSingleImage = (url, timeout = 90000) => {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error("Timeout"))
        }, timeout)

        fetch(url)
            .then(res => {
                clearTimeout(timer);
                if(!res.ok) throw new Error("Fetch Failed");
                return res.blob() // returning binary large object
            })
            .then((blob => {
                const imageObjUrl = URL.createObjectURL(blob);
                resolve(imageObjUrl);

            }))
            .catch(err => {
                clearTimeout(timer);
                reject(err)
            })
    })
}

const useFetchImages = () => {

    const {setImages} = useContext(ImageContext);


    const fetchImages = async (newArray) => {
        await Promise.allSettled(
            newArray.map((item, index) =>
                new Promise((resolve) => {
                    setTimeout(async () => {

                        try {
                            const imageData = await fetchWithRetry(item.imageUrl, 30000);
                            setImages((prev) => prev.map(img =>
                                img.id === item.id ? {
                                    ...img,
                                    imageUrl:imageData,
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