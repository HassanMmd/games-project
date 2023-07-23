import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "./Navbar.css";
import { useMediaQuery } from 'react-responsive';
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const handleClick = (anchor) => () => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <div>
      {isDesktopOrLaptop && <nav className="nav-list">
        <a href="Games/" onClick={handleClick("header")} className="list-item">Home</a>
        <a href="#Aboutus" onClick={handleClick("aboutus")} className="list-item">AboutUs</a>
        <a href="#Contact" onClick={handleClick("contact")} className="list-item">Contact</a>
      </nav>}
      {isTabletOrMobile && <nav className="nav-list">
        <Menu menuButton={<MenuButton className="m-btn"><AiOutlineMenu color='black' size={20} /></MenuButton>}>
          <MenuItem className="menu-nav">
            <a href="Games/" onClick={handleClick("header")} className="list-item">Home</a>
          </MenuItem>
          <MenuItem className="menu-nav">
            <a href="#Aboutus" onClick={handleClick("aboutus")} className="list-item">AboutUs</a>
          </MenuItem>
          <MenuItem className="menu-nav">
            <a href="#Contact" onClick={handleClick("contact")} className="list-item">Contact</a>
          </MenuItem>
        </Menu>
      </nav>}
    </div>
  );
}

export default Navbar;