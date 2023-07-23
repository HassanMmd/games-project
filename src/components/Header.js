import logo from "../Assets/images/image.png";
import "./Header.css";
import Navbar from "./Navbar";

function Header() {
    return (
        <header className="header">
            <div className="logo-nav">
                <div className="Compant-name-logo">
                    <img className="logo" src={logo} alt="logo" />
                    <div className="company-name">HMM GAMES</div>
                </div>
                <Navbar />
            </div>
            <div>
            </div>
        </header>
    );
}

export default Header;