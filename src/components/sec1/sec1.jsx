import Header from "./header/header";
import SearchBox from "./searchBox/searchBox";
import './assets/sec1.css'

const Sec1 = () => {
    return (
        <div className="sec1">
            <div className="sec1-2">
                <Header />
                <SearchBox />
            </div>
        </div>
    );
}

export default Sec1;