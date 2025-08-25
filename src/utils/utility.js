const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generating image url
const generateImageUrl = (params, encodedPrompt) => {
    const baseUrl = 'https://image.pollinations.ai/prompt'

    const queryString  = new URLSearchParams(params)

    return `${baseUrl}/${encodedPrompt}?${queryString}`
}

// fetch image with retry functionality:
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

//fetch single image functionality:
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



export {getRandomNumber, generateImageUrl, fetchWithRetry}