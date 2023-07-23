import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    Navbar,
    AllAnime,
    AnimeByGenre,
    AnimeByRanking,
    AnimeDetails,
    AnimeNews
} from "./exports/index";

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
                            <Route path="/getallanime" element={<AllAnime />} />
                            <Route path="/getgenre" element={<AnimeByGenre />} />
                            <Route path="/getonebyranking" element={<AnimeByRanking />} />
                            <Route path="/getanimebyid/:id" element={<AnimeDetails />} />
                            <Route path="/animenews" element={<AnimeNews />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
