import React, { useState } from 'react';
import { SearchContext } from '../context';

const SearchProvider = ({ children }) => {
    const [searchText, setSearchText] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    return (
        <SearchContext.Provider value={{searchText,setSearchText,isSearching,setIsSearching}}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;