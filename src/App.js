import { useState } from "react";

import NavBar from "./components/NaviBar/NavBar";
import Logo from "./components/NaviBar/Logo";
import NumResults from "./components/NaviBar/NumResults";
import Search from "./components/NaviBar/Search";

import Main from "./components/Main/Main";
import Box from "./components/Main/Box";
import MovieList from "./components/Main/MovieList";

import WatchedSummary from "./components/Main/WatchedSummary";
import WatchedMoviesList from "./components/Main/WatchedMoviesList";
import { tempMovieData, tempWatchedData } from "./data";

export default function App() {
    const [movies, setMovies] = useState(tempMovieData);
    const [watched, setWatched] = useState(tempWatchedData);

    return (
        <>
            <NavBar>
                <Logo />
                <Search />
                <NumResults movies={movies} />
            </NavBar>
            <Main>
                <Box>
                    <MovieList movies={movies} />
                </Box>
                <Box>
                    <WatchedSummary watched={watched} />
                    <WatchedMoviesList watched={watched} />
                </Box>
            </Main>
        </>
    );
}
