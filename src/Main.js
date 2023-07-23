import "./Main.css";
import companyImage from "./Assets/images/image.png";
import game1 from "./Assets/images/game1.png";
import game2 from "./Assets/images/game2.png";
import game3 from "./Assets/images/game3.png";
import game4 from "./Assets/images/game4.png";
import React from "react";
import GamesList from "./components/GamesList";
import myGames from "./Assets/videos/My-games.mp4";
import { useMediaQuery } from 'react-responsive';

function Main() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <main className="main">
            {isDesktopOrLaptop && <section className="company-description">
                <article className="title">
                    <div className="title-com-desc">
                        <h1 className="title-companyName">HMM GAMES</h1>
                        <div className="title-description">
                            <div>
                                We care about making new games, 3D and 2D games.</div>
                            <div>Started in 2020, you can download our games</div>
                            <div>and enjoy playing the games.</div>
                        </div>
                        <a href="#ga" className="see-more">see more</a>
                    </div>
                    {isDesktopOrLaptop && <img className="company-img" src={companyImage} alt="company-img" />}
                    {isTabletOrMobile && <img className="company-img-mobile" src={companyImage} alt="company-img" />}
                </article>
            </section>}
            {isTabletOrMobile && <section className="company-description-mobile">
                <article className="title">
                    <div className="title-com-desc">
                        <h1 className="title-companyName">HMM GAMES</h1>
                        <div className="title-description-mobile">
                            <div>We care about making new games</div>
                            <div>3D and 2D games. Started in 2020,</div>
                            <div>you can download our games and </div>
                            <div>enjoy playing the games.</div>
                        </div>
                        <a href="#ga" className="see-more">see more</a>
                    </div>
                    {isDesktopOrLaptop && <img className="company-img" src={companyImage} alt="company-img" />}
                    {isTabletOrMobile && <img className="company-img-mobile" src={companyImage} alt="company-img" />}
                </article>
            </section>}
            <h1>Our Games</h1>
            {isDesktopOrLaptop && <section className="company-games">
                <article className="games">
                    <img className="game-img" src={game1} alt="game-img"></img>
                    <p>Bounicing Orb: is one of our games. Handle the ball and collect stars.</p>
                </article>
                <article className="games">
                    <img className="game-img" src={game2} alt="game-img"></img>
                    <p>Ballon: is a really nice game. Keep the balloon safe and don't forget the time.</p>
                </article>
                <article className="games">
                    <img className="game-img" src={game3} alt="game-img"></img><p>Monkey: nice game for kids. Help the monkey eating bananas and jumping safe.
                    </p>
                </article>
                <article className="games">
                    <img className="game-img-mobile" src={game4} alt="game-img"></img>
                    <p>Caveman: is an adventure game. Caveman hunts birds and collect apples.</p>
                </article>
            </section>}
            {isTabletOrMobile && <section className="company-games-mobile">
                <article className="games-mobile">
                    <img className="game-img-mobile" src={game1} alt="game-img"></img>
                    <p>Bounicing Orb: is one of our games. Handle the ball and collect stars.</p>
                </article>
                <article className="games-mobile">
                    <img className="game-img-mobile" src={game2} alt="game-img"></img>
                    <p>Ballon: is a really nice game. Keep the balloon safe and don't forget the time.</p>
                </article>
                <article className="games-mobile">
                    <img className="game-img-mobile" src={game3} alt="game-img"></img><p>Monkey: nice game for kids. Help the monkey eating bananas and jumping safe.
                    </p>
                </article>
                <article className="games-mobile">
                    <img className="game-img-mobile" src={game4} alt="game-img"></img>
                    <p>Caveman: is an adventure game. Caveman hunts birds and collect apples.</p>
                </article>
            </section>}
            {isDesktopOrLaptop && <section id="ga" className="games-video">
                <article>
                    <GamesList />
                </article>
            </section>}
            {isTabletOrMobile && <section id="ga" className="games-video-mobile">
                <article>
                    <div className="select-game">Select Game and watch the video</div>
                    <GamesList />
                </article>
            </section>}
            <section>
                {isDesktopOrLaptop && <article id="aboutus" className="aboutus">
                    <div>
                        We are glad to see you here.
                        3 years of success, year after year we are growing.
                        Making games is something creative, if you enjoy that and you like
                        this field join us and Be one of us
                    </div>
                </article>}
                {isTabletOrMobile && <article id="aboutus" className="aboutus-mobile">
                    <div>
                        <div>We are glad to see you here. 3 years </div>
                        <div>of success, year after year we are</div>
                        <div>growing. Making games is something</div>
                        <div>creative, if you enjoy that and you</div>
                        <div>like this field join us and Be one of us.</div>
                    </div>
                </article>}
            </section>
        </main>
    );
}

export default Main;