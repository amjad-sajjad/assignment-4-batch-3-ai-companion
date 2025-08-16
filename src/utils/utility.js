const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generating image url
const generateImageUrl = (params, encodedPrompt) => {
    const baseUrl = 'https://image.pollinations.ai/prompt'

    const queryString  = new URLSearchParams(params)

    return `${baseUrl}/${encodedPrompt}?${queryString}`
}



export {getRandomNumber, generateImageUrl}