import React, { useState } from 'react';
import { SearchContext } from '../context';

const SearchProvider = ({ children }) => {
    const [searchText, setSearchText] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [searchSuggetions, setSearchSuggetions] = useState([]);
    return (
        <SearchContext.Provider value={{searchText,setSearchText,isSearching,setIsSearching,searchSuggetions, setSearchSuggetions}}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;