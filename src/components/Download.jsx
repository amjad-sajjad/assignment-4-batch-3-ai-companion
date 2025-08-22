import React, { useContext } from 'react';
import { DownloadContext } from '../context';

const Download = () => {
    const {downloadImages, toggleDownload} = useContext(DownloadContext);

    return (
        <main className="relative z-10">
            {/* <!-- Welcome Message --> */}
            <h2 className="text-4xl font-bold mb-8">Downloaded <span className="text-2xl">👋</span>
            </h2>

            {/* <!-- Image Presets Section --> */}
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {/* <!-- Image Card 1 --> */}
                    {downloadImages.length > 0 && downloadImages.map(image => (
                        <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
                        <button
                        onClick={()=> toggleDownload(image)}
                         className="absolute bottom-2 right-2  p-1 cursor-pointer ">
                           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="white" width="24" height="24" viewBox="0 0 16 16">
                                    <path d="M 6.496094 1 C 5.675781 1 5 1.675781 5 2.496094 L 5 3 L 2 3 L 2 4 L 3 4 L 3 12.5 C 3 13.328125 3.671875 14 4.5 14 L 10.5 14 C 11.328125 14 12 13.328125 12 12.5 L 12 4 L 13 4 L 13 3 L 10 3 L 10 2.496094 C 10 1.675781 9.324219 1 8.503906 1 Z M 6.496094 2 L 8.503906 2 C 8.785156 2 9 2.214844 9 2.496094 L 9 3 L 6 3 L 6 2.496094 C 6 2.214844 6.214844 2 6.496094 2 Z M 5 5 L 6 5 L 6 12 L 5 12 Z M 7 5 L 8 5 L 8 12 L 7 12 Z M 9 5 L 10 5 L 10 12 L 9 12 Z"></path>
                                </svg>
                        </button>
                        <img src={image.url} alt="Anime character in kimono"
                            className={`w-[${image.width}] h-[${image.height}] object-cover`}/>
                    </div>
                    ))}

                   
                </div>
            </div>
        </main>
    );
};

export default Download;