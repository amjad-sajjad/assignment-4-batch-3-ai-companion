import React, { useContext, useEffect, useState } from 'react';
import { SettingContext } from '../context';

const Setting = () => {
    const [models, setModels] = useState([]);
    const { imageSettings, setImageSettings } = useContext(SettingContext)

    // console.log(imageSettings)

    useEffect(() => {
        const getAiModals = async () => {

            try {
                const response = await fetch("https://image.pollinations.ai/models");
                if (!response.ok) {
                    throw new Error("Modals fetching failed")
                }
                const data = await response.json()
                setModels(data);


            } catch (err) {
                console.log(err.message)
            }

        }
        getAiModals()


    }, [])


    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name === "noLogo") {
            value = e.target.checked;
        }
        else if (name === "width" || name === "height") {
            const numValue = Number(value);
            if (isNaN(numValue)) return; // Prevent updating with non-numeric values

            const [aspectWidth, aspectHeight] = imageSettings.aspectRatio.split(":").map((i) => Number(i));

            let newWidth 
            let newHeight 

            if (name === "width") {
                newWidth = numValue;
                newHeight = Math.round((numValue / aspectWidth) * aspectHeight);
            } else if (name === "height") {
                newHeight = numValue;
                newWidth = Math.round((numValue / aspectHeight) * aspectWidth);
            }
            setImageSettings({
                ...imageSettings,
                width: newWidth,
                height: newHeight,
            });
            return;
        }

        setImageSettings({
            ...imageSettings,
            [name]: value
        })
    }

    const handleClick = (ratio) => {
        setImageSettings(prevSettings => ({
            ...prevSettings,
            aspectRatio: ratio,
            width:"",
            height:""
        }));
    }




    return (
        <div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">Advanced Settings</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* <!-- Model Selection --> */}
                <div>
                    <label htmlFor="model" className="block text-sm font-medium text-zinc-700 mb-1">Model</label>
                    <select
                        onChange={handleChange}
                        id="model"
                        name='model'
                        className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                        {models.map((model, index) => <option key={index} className="bg-zinc-900" defaultValue="turbo">{model}</option>)}

                    </select>
                </div>

                {/* <!-- Seed Input : Auto Generated, readonly htmlFor user --> */}
                <div>
                    <label htmlFor="seed" className="block text-sm font-medium text-zinc-700 mb-1">Seed (htmlFor reproducible
                        results)</label>
                    <input
                        name='seed'
                        value={imageSettings.seed}
                        onChange={handleChange}
                        type="text"
                        id="seed"
                        className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Random" />
                </div>

                {/* <!-- Width Input --> */}
                <div>
                    <label htmlFor="width" className="block text-sm font-medium text-zinc-700 mb-1">Width</label>
                    <input
                        type="text"
                        id="width"
                        name='width'
                        value={imageSettings.width}
                        onChange={handleChange}
                        className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" />
                </div>

                {/* <!-- Height Input --> */}
                <div>
                    <label htmlFor="height" className="block text-sm font-medium text-zinc-700 mb-1">Height</label>
                    <input
                        type="text"
                        id="height"
                        name='height'
                        value={imageSettings.height}
                        onChange={handleChange}
                        className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" />
                </div>

                {/* <!-- Aspect Ratio Presets --> */}
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Aspect Ratio Presets</label>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => handleClick("1:1")}
                            disabled={imageSettings.aspectRatio === "1:1"}
                            className={`bg-zinc-900/10 px-3 py-3 text-xs rounded transition-colors hover:bg-zinc-800 ${imageSettings.aspectRatio === "1:1" ? "border border-white" : ""}`}>1:1</button>
                        <button
                            onClick={() => handleClick("16:9")}
                            disabled={imageSettings.aspectRatio === "16:9"}
                            className={`bg-zinc-900/10 px-3 py-3 text-xs rounded transition-colors hover:bg-zinc-800 ${imageSettings.aspectRatio === "16:9" ? "border border-white" : ""}`}>16:9</button>
                        <button
                            onClick={() => handleClick("4:3")}
                            className={`bg-zinc-900/10 px-3 py-3 text-xs rounded transition-colors hover:bg-zinc-800 ${imageSettings.aspectRatio === "4:3" ? "border border-white" : ""}`}>4:3</button>
                        <button
                            onClick={() => handleClick("3:2")}
                            className={`bg-zinc-900/10 px-3 py-3 text-xs rounded transition-colors hover:bg-zinc-800 ${imageSettings.aspectRatio === "3:2" ? "border border-white" : ""}`}>3:2</button>
                    </div>
                </div>

                {/* <!-- No Logo Toggle --> */}
                <div>
                    <label htmlFor="noLogo" className="block text-sm font-medium text-zinc-700 mb-1">No Logo</label>
                    <input
                        type="checkbox"
                        id="noLogo"
                        name="noLogo"
                        checked={imageSettings.noLogo}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                    />
                </div>
            </div>
        </div>
    );
};

export default Setting;