import './assets/sec4.css'
import device from './assets/images/device.png'
import movie from './assets/images/movie.gif'

const sec4 = () => {
    return (
        <div className='sec4'>
            <div className="sec4left">
                <div className="sec4text">
                    <h1 className='sec4h1'>Watch everywhere</h1>
                    <h3 className='sec4h3'>Stream unlimited films and TV programmes on your phone, tablet, laptop and TV.</h3>
                </div>
            </div>
            <div className="sec4right">
                <figure className='sec4figure1'>
                    <img className='sec4img1' src={device} alt="" />
                    <figure className='sec4figure2'>
                        <img className='sec4img2' src={movie} alt="" />
                    </figure>
                </figure>
            </div>
        </div>
    );
}

export default sec4;