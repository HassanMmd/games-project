import CavemanVideo from "../../Assets/videos/games/Caveman.mp4";
import { useMediaQuery } from 'react-responsive';

function Caveman() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <div>
            <section >
                <article>
                    <div>
                        {isDesktopOrLaptop && <video width="750" height="500" controls>
                            <source src={CavemanVideo} type="video/mp4" />
                        </video>}
                        {isTabletOrMobile && <video width="100%" height="100%" controls>
                            <source src={CavemanVideo} type="video/mp4" />
                        </video>}
                    </div>
                </article>
            </section>
        </div>
    )
}
export default Caveman;