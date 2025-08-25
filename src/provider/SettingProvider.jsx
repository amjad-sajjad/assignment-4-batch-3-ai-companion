import React, { useState } from 'react';
import { SettingContext } from '../context';


const SettingProvider = ({children}) => {
    const [imageSettings, setImageSettings] = useState({
        model:"flux",
        seed: 0,
        width:1024,
        height:1024,
        aspectRatio:"1:1",
        noLogo: false,
    })
  return (

    <SettingContext.Provider value={{imageSettings, setImageSettings}}>
            {children}
    </SettingContext.Provider>
  );
};

export default SettingProvider;
