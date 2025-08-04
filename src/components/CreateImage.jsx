import React from 'react';
import PromptSearch from './PromptSearch';
import Setting from './Setting';
import Image from './Image';

const CreateImage = () => {
    return (
        <main className="relative z-10">
            {/* <!-- Welcome Message --> */}
            <h2 className="text-4xl font-bold mb-8">Let's create a masterpiece, Alvian! <span className="text-2xl">👋</span>
            </h2>

            {/* <!-- Search Input --> */}
           <PromptSearch/>

            {/* <!-- Suggestions Section --> */}
            {/* <!-- Settings Panel --> */}
            <Setting/>

            {/* <!-- Image Presets Section --> */}
            <Image/>
        </main>
    );
};

export default CreateImage;