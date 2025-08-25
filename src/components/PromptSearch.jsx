import React, { useContext } from 'react';
import SearchIcon from './svg/SearchIcon';
import SendIcon from './svg/SendIcon';
import { ImageContext, SearchContext, SettingContext } from '../context';
import { generateImageUrl, getRandomNumber } from '../utils/utility';
import useFetchImages from '../hooks/useFetchImages';
import { promptData } from '../data/data';

const PromptSearch = () => {
    const { setSearchText, searchText, setIsSearching, isSearching, setSearchSuggetions, searchSuggetions } = useContext(SearchContext);
    const { imageSettings, setImageSettings } = useContext(SettingContext);
    const { setImages } = useContext(ImageContext);
    const fetchImages = useFetchImages()


    const handleChange = (e) => {
        const value = e.target.value;
        setSearchText(value);

        const prompts = promptData.map(promptObj => promptObj.prompts);
        const promptsArray = prompts.flat();
        
        if (value.length > 0) {

            const filterPrompts = promptsArray.filter(prompt => prompt.toLowerCase().includes(value.toLowerCase()));
            setSearchSuggetions(filterPrompts.slice(0, 5));

        }
        else{
            setSearchSuggetions([])
        }

    }

    const handleClick = async () => {
        setSearchText("");
        setIsSearching(true);

        if (!searchText) {
            setIsSearching(false);
            alert("Please enter a search prompt...!")
            return;
        }
        const randomSeed = imageSettings.seed === 0 ? getRandomNumber(1, 2000) : Number(imageSettings.seed);

        setImageSettings({ ...imageSettings, seed: randomSeed });

        const encodedPrompt = encodeURIComponent(searchText.trim().toLowerCase());

        const newArray = Array.from({ length: 9 }, (_, i) => {
            const params = {
                model: imageSettings.model,
                seed: imageSettings.seed + i + 1,
                width: imageSettings.width,
                height: imageSettings.height,
                nologo: imageSettings.noLogo
            }
            const url = generateImageUrl(params, encodedPrompt);

            return {
                id: crypto.randomUUID(),
                isLoading: true,
                imageUrl: url,
                hasError: null
            }
        });

        setImages([...newArray])
        // fetchAllImage here

        try {
            //  "await" the completion of the async operation
            await fetchImages(newArray);
        } catch (error) {
            // Handle any potential errors from fetchImages if necessary
            console.error("Failed to fetch images:", error);
        } finally {
            //  Once the await is done, set loading to false
            setIsSearching(false);
        }

    }

    const handleSuggestPromptClick = (suggetion) => {
        setSearchText(suggetion)
        setSearchSuggetions([]);
    }

    return (
        <div className='relative'>
        <div
            className="relative mb-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm">
            <div className="flex items-center">
                <div className="pl-5 pr-2">
                    {isSearching ?
                        <span className="loading loading-spinner loading-xs"></span>
                        : <SearchIcon />
                    }

                </div>
                <input
                    value={searchText}
                    onChange={handleChange}
                    type="text"
                    placeholder="Create with Prompts"
                    className="outline-none w-full py-4 px-2 bg-transparent text-white placeholder-zinc-400 text-lg" />
                    
                <button
                    onClick={handleClick}
                    className="bg-zinc-900 hover:bg-zinc-700 transition-colors p-4 mr-1 rounded-full">
                    <SendIcon />
                </button>
            </div>
        </div>
        <div className='absolute w-full top-16 bg-zinc-900'>
            <ul>
                    {searchSuggetions.map(suggetion => <><li
                    onClick={()=> handleSuggestPromptClick(suggetion)}
                     className='px-2 py-1 cursor-pointer'> <p> {suggetion}</p></li> <hr /></>)}
                    </ul>
        </div>
        </div>
    );
};

export default PromptSearch;