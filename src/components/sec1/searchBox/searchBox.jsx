import './assets/searchBox.css'

const SearchBox = () => {
    return (
        <div className='searchBox'>
            <div className="box">
                <h1 className='searchBoxH1'>Unlimited films, TV programmes and more</h1>
                <h3 className='searchBoxH3'>Watch anywhere. Cancel at any time.</h3>
                <h3 className='searchBoxH3'>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className='search'>
                    <input type="text" placeholder='Email Address'/>
                    <xmp>Get started &gt;</xmp>
                </div>
            </div>
        </div>
    );
}

export default SearchBox;