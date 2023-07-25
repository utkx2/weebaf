import millify from "millify";
import HomeCards from "../components/HomeCards";
import AllAnimeImg from "../images/AllAnimeImg.jpeg";
import AllMangaImg from "../images/AllMangaImg.jpeg";

const AllAnime = () => {
    return (
        <>
            <HomeCards
                image={AllAnimeImg}
                title="All Animes"
                description="Scroll through all the anime availabe on Planet Earth. We are currently working on contacting other planets for their Animes as well.">
            </HomeCards>
            <HomeCards
                image={AllMangaImg}
                title="All Mangas"
                description="Scroll through all the Mangas availabe on Planet Earth. We do not guarantee any outside manga contacts as aliens don't know how to read.">
            </HomeCards>
        </>
    )
}

export default AllAnime;
