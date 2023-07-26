import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    Navbar,
    Home,
    AnimeByGenre,
    AnimeByRanking,
    AnimeDetails,
    AnimeNews,
    AllAnime,
    AllManga,
    YourList
} from "./exports/index";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="main">
                    <div className="routes">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/getgenre" element={<AnimeByGenre />} />
                            <Route path="/getonebyranking" element={<AnimeByRanking />} />
                            <Route path="/getanimebyid/:id" element={<AnimeDetails />} />
                            <Route path="/animenews" element={<AnimeNews />} />
                            <Route path="/allanime" element={<AllAnime />} />
                            <Route path="/allmanga" element={<AllManga />} />
                            <Route path="/yourlist" element={<YourList />} />
                        </Routes>
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
