import React, { useContext } from 'react';
import { DownloadContext, ImageContext } from '../context';

const Image = () => {
    const { images } = useContext(ImageContext);
    console.log(images)
    const { downloadImages, toggleDownload } = useContext(DownloadContext);


    return (
        <div>
            <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {/* <!-- Image Card 1 --> */}
                {
                    images.length > 0 && images.map(image =>
                    (
                        <div key={image.id} className="image-card rounded-xl overflow-hidden  relative">
                            <button
                                className="absolute bottom-2 right-2 bg-black p-2 rounded-full shadow hover:bg-gray-800 cursor-pointer"
                                onClick={() => toggleDownload(image)}
                            >
                                {downloadImages.find(item => item.id === image.id) ? <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="white" width="24" height="24" viewBox="0 0 16 16">
                                    <path d="M 6.496094 1 C 5.675781 1 5 1.675781 5 2.496094 L 5 3 L 2 3 L 2 4 L 3 4 L 3 12.5 C 3 13.328125 3.671875 14 4.5 14 L 10.5 14 C 11.328125 14 12 13.328125 12 12.5 L 12 4 L 13 4 L 13 3 L 10 3 L 10 2.496094 C 10 1.675781 9.324219 1 8.503906 1 Z M 6.496094 2 L 8.503906 2 C 8.785156 2 9 2.214844 9 2.496094 L 9 3 L 6 3 L 6 2.496094 C 6 2.214844 6.214844 2 6.496094 2 Z M 5 5 L 6 5 L 6 12 L 5 12 Z M 7 5 L 8 5 L 8 12 L 7 12 Z M 9 5 L 10 5 L 10 12 L 9 12 Z"></path>
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image-down-icon lucide-image-down"><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" /><path d="m14 19 3 3v-5.5" /><path d="m17 22 3-3" /><circle cx="9" cy="9" r="2" /></svg>}



                            </button>
                            {image.isLoading ? <div className="w-full h-48 object-cover flex items-center justify-center flex-col"><span className="loading loading-bars loading-xl"></span>
                                <h4>Please wait for 15-30 seconds</h4>
                            </div> : <img src={image.imageUrl} alt="Anime character in kimono"
                                className={`w-[${image.width}] h-[${image.height}] object-cover`} />}

                        </div>))
                }
            </div>
        </div>
    );
};

export default Image;