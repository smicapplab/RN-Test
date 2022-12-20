import { createContext, useState } from 'react';

export const LyricsContext = createContext({
    lyric: "",
    searchHistory: [],
    addSearches: ({ artist, title }) => { }
});

function LyricsContextProvider({ children }) {
    const [searchHistories, setSearchHistories] = useState([{artist: "vvvv", title: "xxxx"}]);
    const [lyric, setLyric] = useState("");

    function addSearchToHistory({ artist, title }) {
        setSearchHistories((currSearchHist) => [...currSearchHist, { artist, title }]);
    }

    const value = {
        lyric: lyric,
        searchHistory:searchHistories,
        addSearch: addSearchToHistory
    };

    return (
        <LyricsContext.Provider value={value}>
            {children}
        </LyricsContext.Provider>
    );
}

export default LyricsContextProvider;
