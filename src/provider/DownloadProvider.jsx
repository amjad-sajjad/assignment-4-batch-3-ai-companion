import React, { useState } from 'react';
import { DownloadContext } from '../context';

const DownloadProvider = ({ children }) => {
    const [downloadImages, setDownloadImages] = useState([]);

    const handleDownload = async (url, filename, id) => {
        try {
            // 1. Fetch the image data from the URL
            const response = await fetch(url);
            // 2. Convert it into a "blob" (binary large object, basically raw file data)
            const blob = await response.blob();
            // 3. Create a temporary object URL (browser can use this like a file link)
            const blobUrl = URL.createObjectURL(blob);

            // 4. Create a hidden <a> tag programmatically
            const link = document.createElement("a");
            link.href = blobUrl;          // set the file link
            link.download = filename;     // set the filename (e.g., image-1.png)
            link.click();                 // simulate a click, triggers browser download

            // 5. Free memory by revoking the object URL
            URL.revokeObjectURL(blobUrl);

            // 6. Save the image info to parent (App), so Download.jsx can show it
            setDownloadImages(prev => [...prev, { id, url }])

        }
        catch (err) {
            alert(`Download Failed: ${err}`)
        }

    }

    const toggleDownload = (image) => {
        const alreadyDownloaded = downloadImages.find(item => item.id ===image.id);
        
        if (!alreadyDownloaded) {
            console.log("add download")
            handleDownload(image.imageUrl, `image-${image.id}.png`, image.id);
        }
        else {
            console.log("delete download")
            const remainImages =  downloadImages.filter(item => item.id !==image.id)
            setDownloadImages([...remainImages])
        }
    }


    return (
        <DownloadContext.Provider value={{ downloadImages, setDownloadImages, handleDownload , toggleDownload}}>
            {children}
        </DownloadContext.Provider>
    );
};

export default DownloadProvider;