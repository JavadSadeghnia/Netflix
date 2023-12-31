import './assets/sec5.css'
import sec5 from './assets/images/sec5.png'

const Sec5 = () => {
    return (
        <div className='sec5'>
            <div className="sec5left">
                <div className="sec5text">
                    <h1 className='sec5h1'>Create profiles for children</h1>
                    <h3 className='sec5h3'>Send children on adventures with their favourite characters in a space made just for them – free with your membership.</h3>
                </div>
            </div>
            <div className="sec5right">
                <figure className='sec5figure1'>
                    <img className='sec5img1' src={sec5} alt="" />
                </figure>
            </div>
        </div>
    );
}

export default Sec5;