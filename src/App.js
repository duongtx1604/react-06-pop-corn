import { useState } from "react";

import NavBar from "./components/NaviBar/NavBar";
import Logo from "./components/NaviBar/Logo";
import NumResults from "./components/NaviBar/NumResults";
import Search from "./components/NaviBar/Search";

import Main from "./components/Main/Main";
import ListBox from "./components/Main/ListBox";
import MovieList from "./components/Main/MovieList";

import WatchedBox from "./components/Main/WatchedBox";
import { tempMovieData, tempWatchedData } from "./data";

export default function App() {
    const [movies, setMovies] = useState(tempMovieData);

    return (
        <>
            <NavBar>
                <Logo />
                <Search />
                <NumResults movies={movies} />
            </NavBar>
            <Main>
                <ListBox>
                    <MovieList movies={movies} />
                </ListBox>
                <WatchedBox />
            </Main>
        </>
    );
}
