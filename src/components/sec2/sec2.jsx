import './assets/sec2.css'
import tv from './assets/images/tv.png'
import gif from './assets/images/netflixgif.gif'

const Sec2 = () => {
    return (
        <div className='sec2'>
            <div className="sec2left">
                <div className="sec2text">
                    <h1 className='sec2h1'>Enjoy on your TV</h1>
                    <h3 className='sec2h3'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                </div>
            </div>
            <div className="sec2right">
                <figure className='sec2figure1'>
                    <img className='sec2img1' src={tv} alt="" />
                    <figure className='sec2figure2'>
                        <img className='sec2img2' src={gif} alt="" />
                    </figure>
                </figure>
            </div>
        </div>
    );
}

export default Sec2;