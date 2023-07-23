import myGames from "../../Assets/videos/My-games.mp4";
import { useMediaQuery } from 'react-responsive';

function AllGames() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <div>
            {isDesktopOrLaptop && <video width="750" height="500" controls>
                <source src={myGames} type="video/mp4" />
            </video>}
            {isTabletOrMobile && <video width="100%" height="100%" controls>
                <source src={myGames} type="video/mp4" />
            </video>}
        </div>
    );
}
export default AllGames;