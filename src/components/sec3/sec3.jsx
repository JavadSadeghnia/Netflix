import './assets/sec3.css'
import boxshot from './assets/images/boxshot.png'
import download from './assets/images/download-icon.gif'
import mobile from './assets/images/mobile.jpeg'

const Sec3 = () => {
    return (
        <div className='sec3'>
            <div className="sec3left">
                <div className="sec3text">
                    <h1 className='sec3h1'>Download your programmes to watch offline</h1>
                    <h3 className='sec3h3'>Save your favourites easily and always have something to watch.</h3>
                </div>
            </div>
            <div className="sec3right">
                <figure className='sec3figure1'>
                    <img className='sec3img1' src={mobile} alt="" />
                    <figure className='sec3figure2'>
                        <img className='sec3img2-1' src={boxshot} alt="" />
                        <figcaption className="sec3rightfigcaption">
                            <div className="sec3rightfigcaption1">Stranger Things</div>
                            <div className="sec3rightfigcaption2">Downloading...</div>
                        </figcaption>
                        <img className='sec3img2-2' src={download} alt="" />
                    </figure>
                </figure>
            </div>
        </div>
    );
}

export default Sec3;