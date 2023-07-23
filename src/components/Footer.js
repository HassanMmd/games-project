import "../components/Footer.css";
import logo from "../Assets/images/image.png";
import { useMediaQuery } from 'react-responsive';

function Footer() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <footer className="footer">
            {isDesktopOrLaptop && <div>
                <div className="Compant-name-logo">
                    <img className="logo-footer" src={logo} alt="logo" />
                    <div className="company-name">HMM GAMES</div>
                </div>
                <div id="contact" className="contact">
                    <h5>Contact</h5>
                    <div>Email</div>
                    <div>dancing0ball@gmail.com</div>
                </div>
                <div className="contact">
                    <h5>social media</h5>
                    <a href="https://www.youtube.com/channel/UCIr6PtkImtsR6csJHeIZXlA">Youtube</a>
                    <a href="https://twitter.com/DancingBall4">Twitter</a>
                </div>
            </div>}
            {isTabletOrMobile && <div>
                <div className="Compant-name-logo-mobile">
                    <img className="logo-footer" src={logo} alt="logo" />
                    <div className="company-name">HMM GAMES</div>
                </div>
                <div id="contact" className="contact">
                    <h5>Contact</h5>
                    <div>Email</div>
                    <div>dancing0ball@gmail.com</div>
                </div>
                <div className="contact">
                    <h5>social media</h5>
                    <a href="https://www.youtube.com/channel/UCIr6PtkImtsR6csJHeIZXlA">Youtube</a>
                    <a href="https://twitter.com/DancingBall4">Twitter</a>
                </div>
            </div>}
        </footer>
    );
}

export default Footer;