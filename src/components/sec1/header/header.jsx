import './assets/header.css'
import LeftBox from './LeftBox.jsx'
import RightBox from './RightBox.jsx'

const Header = () => {
    return (
        <>
            <header>
                <LeftBox />
                <RightBox />
            </header >
        </>
    );
}

export default Header;