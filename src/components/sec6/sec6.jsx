import { useEffect } from 'react';
import './assets/sec6.css'

const Sec6 = () => {

    const accordion = (e) => {
        for (let i = 0; i < 6; i++) {
            if (e.target.id == i) {
                document.getElementsByClassName('rowTwo')[e.target.id].classList.toggle('rowTwoToggle')
                document.getElementsByClassName('X')[e.target.id].classList.toggle('Xrotate')
            } else {
                document.getElementsByClassName('rowTwo')[i].classList.remove('rowTwoToggle')
                document.getElementsByClassName('X')[i].classList.remove('Xrotate')
            }
        }
    }

    return (
        <div className='sec6'>
            <h1 className='frequently'>Frequently Asked Questions</h1>
            <div className="accordionMenu">
                <div className='menu'>
                    <div onClick={() => accordion(event)} id='0' className='rowOne'>What can I watch on Netflix?
                        <svg id='0' xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-plus-lg X" viewBox="0 0 16 16">
                            <path id='0' fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                        </svg>
                    </div>
                    <div className='rowTwo'>
                        Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.
                        <a className='link' href="#">Check out some of our content.</a>
                    </div>
                </div>
                <div className='menu'>
                    <div onClick={() => accordion(event)} id='1' className='rowOne'>What is Netflix?
                        <svg id='1' xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-plus-lg X" viewBox="0 0 16 16">
                            <path id='1' fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                        </svg>
                    </div>
                    <div className='rowTwo'>
                        Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.<br /><br />You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!
                    </div>
                </div>
                <div className='menu'>
                    <div onClick={() => accordion(event)} id='2' className='rowOne'>How much does Netflix cost?
                        <svg id='2' xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-plus-lg X" viewBox="0 0 16 16">
                            <path id='2' fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                        </svg>
                    </div>
                    <div className='rowTwo'>
                        Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from €7.99 to €15.99 a month. No extra costs, no contracts.
                    </div>
                </div>
                <div className='menu'>
                    <div onClick={() => accordion(event)} id='3' className='rowOne'>Where can I watch?
                        <svg id='3' xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-plus-lg X" viewBox="0 0 16 16">
                            <path id='3' fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                        </svg>
                    </div>
                    <div className='rowTwo'>
                        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br /><br />You can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                    </div>
                </div>
                <div className='menu'>
                    <div onClick={() => accordion(event)} id='4' className='rowOne'>How do I cancel?
                        <svg id='4' xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-plus-lg X" viewBox="0 0 16 16">
                            <path id='4' fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                        </svg>
                    </div>
                    <div className='rowTwo'>
                        Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.
                    </div>
                </div>
                <div className='menu'>
                    <div onClick={() => accordion(event)} id='5' className='rowOne'>Is Netflix good for children?
                        <svg id='5' xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-plus-lg X" viewBox="0 0 16 16">
                            <path id='5' fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                        </svg>
                    </div>
                    <div className='rowTwo'>
                        The Netflix Children's experience is included in your membership to give parents control while children enjoy family-friendly TV programmes and films in their own space.<br /><br />Children's profiles come with PIN-protected parental controls that let you restrict the maturity rating of content children can watch and block specific titles you don’t want children to see.
                    </div>
                </div>

            </div>
            <div className='searchBox'>
                <div className="box">
                    <h3 className='searchBoxH3'>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className='search'>
                        <input type="text" placeholder='Email Address' />
                        <xmp>Get started &gt;</xmp>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sec6;