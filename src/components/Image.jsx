import React, { useContext } from 'react';
import { ImageContext } from '../context';

const Image = () => {
    const { images } = useContext(ImageContext);
    console.log(images)
    return (
        <div>
            <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {/* <!-- Image Card 1 --> */}
                {
                    images.length > 0 && images.map(image => (
                        <div key={image.id} className="image-card rounded-xl overflow-hidden cursor-pointer relative">
                            <div className="absolute bottom-2 right-2  p-1 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image-down-icon lucide-image-down"><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" /><path d="m14 19 3 3v-5.5" /><path d="m17 22 3-3" /><circle cx="9" cy="9" r="2" /></svg>
                            </div>
                    { image.isLoading ? <div className="w-full h-48 object-cover flex items-center justify-center flex-col"><span className="loading loading-bars loading-xl"></span>
                    <h4>Please wait for 15-30 seconds</h4>
                    </div> : <img src={image.imageUrl} alt="Anime character in kimono"
                                className="w-full h-48 object-cover" />}
                            
                        </div>))
                }
            </div>
        </div>
    );
};

export default Image;