import { useState, useEffect } from "react";

const useAnimeData = () => {
    const [animeData, setAnimeData] = useState([]);

    const getApiData = async () => {
        try {
            const res = await fetch(`https://api.jikan.moe/v4/anime?sfw=true`);
            const resData = await res.json();
            setAnimeData(resData.results);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    return animeData;
};

const useSearchAnimeData = (searchQuery) => {
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        const getApiData = async () => {
            try {
                const res = await fetch(`https://api.jikan.moe/v4/anime?q=${searchQuery}`);
                const resData = await res.json();
                setSearchData(resData.results);
            } catch (error) {
                console.error("Error fetching search data:", error);
            }
        };

        if (searchQuery) {
            getApiData();
        } else {
            setSearchData([]);
        }
    }, [searchQuery]);

    return searchData;
};

const useMangaData = () => {
    const [mangaData, setMangaData] = useState([]);

    const getApiData = async () => {
        try {
            const res = await fetch(`https://api.jikan.moe/v4/manga?sfw=true`);
            const resData = await res.json();
            setMangaData(resData.results);
        } catch (error) {
            console.error("Error fetching manga data:", error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    return mangaData;
};

export default { useAnimeData, useSearchAnimeData, useMangaData };
