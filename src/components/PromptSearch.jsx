import React, { useContext } from 'react';
import SearchIcon from './svg/SearchIcon';
import SendIcon from './svg/SendIcon';
import { ImageContext, SearchContext, SettingContext } from '../context';
import { generateImageUrl, getRandomNumber } from '../utils/utility';
import useFetchImages from '../hooks/useFetchImages';

const PromptSearch = () => {
    const {setSearchText, searchText, setIsSearching} = useContext(SearchContext);
    const {imageSettings, setImageSettings} = useContext(SettingContext);
    const {setImages} = useContext(ImageContext);
    const fetchImages = useFetchImages()

    console.log(searchText);

    const handleClick = () => {
        setSearchText("");
        setIsSearching(true);

        if(!searchText){
            setIsSearching(false);
            alert("Please enter a search prompt...!")
            return;
        }
        const randomSeed = imageSettings.seed === 0 ? getRandomNumber(1, 2000) : Number(imageSettings.seed);

        setImageSettings({...imageSettings,seed: randomSeed});

        const encodedPrompt = encodeURIComponent(searchText.trim().toLowerCase());

        const newArray = Array.from({length:9}, (_,i)=>{
            const params = {
                model:imageSettings.model,
                seed: randomSeed + i + 1,
                width:imageSettings.width,
                height:imageSettings.height,
                nologo:imageSettings.noLogo
            }
            const url = generateImageUrl(params, encodedPrompt);

            return {
                id:crypto.randomUUID(),
                isLoading:true,
                imageUrl:url,
                hasError:null
            }
        });

        setImages(newArray)
        // fetchAllImage TBD here
        fetchImages(newArray)
        

    }

    return (
        <div
            className="relative mb-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm">
            <div className="flex items-center">
                <div className="pl-5 pr-2">
                    <SearchIcon />
                </div>
                <input
                    value={searchText}
                    onChange={(e)=> setSearchText(e.target.value)}
                    type="text"
                    placeholder="Create with Prompts"
                    className="outline-none w-full py-4 px-2 bg-transparent text-white placeholder-zinc-400 text-lg" />
                <button 
                onClick={handleClick}
                className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 mr-1 rounded-full">
                    <SendIcon />
                </button>
            </div>
        </div>
    );
};

export default PromptSearch;