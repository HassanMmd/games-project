import { Route, Routes, Link, useLocation } from "react-router-dom";
import Bounicing from "./game-description/Bounicing";
import Ballon from "./game-description/Ballon";
import Monkey from "./game-description/Monkey";
import Caveman from "./game-description/Caveman";
import React from "react";
import AllGames from "./game-description/AllGames";
import "./GamesList.css";

function GamesList() {
    let use = useLocation();
    console.log(use)
    return (
        <div>
            <nav className="games-navbar">
                <Link to="Games/" className="nav-item">All Games</Link>
                <Link to="Games/Bouncing" className="nav-item">Bouncing Orb</Link>
                <Link to="Games/Ballon" className="nav-item">Ballon</Link>
                <Link to="Games/Monkey" className="nav-item">Monkey</Link>
                <Link to="Games/Caveman" className="nav-item">Caveman</Link>
            </nav>
            <Routes>
                <Route path="Games/" element={<AllGames />}></Route>
                <Route path="Games/Bouncing" element={<Bounicing />}></Route>
                <Route path="Games/Ballon" element={<Ballon />}></Route>
                <Route path="Games/Monkey" element={<Monkey />}></Route>
                <Route path="Games/Caveman" element={<Caveman />}></Route>
            </Routes>
        </div>
    );
}

export default GamesList;