import HomeCards from "../components/HomeCards";
import AllAnimeImg from "../images/AllAnimeImg.jpeg";
import AllMangaImg from "../images/AllMangaImg.jpeg";
import ListAnime from "../images/ListAnime.jpeg";

const AllAnime = () => {
    return (
        <div className="flex justify-center items-center m-10">
            <div className="flex space-x-10">
                <HomeCards
                    image={AllAnimeImg}
                    title="All Animes"
                    button="Discover Animes"
                    URL="/allanime"
                    description="Scroll through all the anime available on Planet Earth. We are currently working on contacting other planets for their Animes as well cuz why not?."
                />
                <HomeCards
                    image={AllMangaImg}
                    title="All Mangas"
                    button="Discover Mangas"
                    URL="/allmanga"
                    description="Scroll through all the Mangas available on Planet Earth. We do not guarantee outside manga contacts as aliens don't know how to read."
                />
                <HomeCards
                    image={ListAnime}
                    title="Your List"
                    button="Manage your List"
                    URL="/yourlist"
                    description="Got some List of Animes you wish to watch or got some memories with some anime. We got you covered, enough with the text files. (like AOT ❤️)"
                />
            </div>
        </div>
    );
};

export default AllAnime;
