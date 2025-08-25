import React, { useContext } from 'react';
import PromptSearch from './PromptSearch';
import Setting from './Setting';
import Image from './Image';
import SettingProvider from '../provider/SettingProvider';
import { UserContext } from '../context';

const CreateImage = () => {
    const {userInfo} = useContext(UserContext);
    return (
        <SettingProvider>
            <main className="relative z-10">
                {/* <!-- Welcome Message --> */}
                <h2 className="text-4xl font-bold mb-8">Hello {userInfo?.name}, Let's create a masterpiece!<span className="text-2xl">👋</span>
                </h2>

                {/* <!-- Search Input --> */}
                <PromptSearch />

                {/* <!-- Suggestions Section --> */}
                {/* <!-- Settings Panel --> */}
                <Setting />

                {/* <!-- Image Presets Section --> */}
                <Image />
            </main>
        </SettingProvider>
    );
};

export default CreateImage;