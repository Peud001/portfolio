import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        AOS.init(
            {
                duration: 2000,
                delay: 300,
            }
        )
    }, [])

    return(
        <section id="home" className="home-section">
        <div className="home set-space">
            <div className="home-text">
                <div className="small-text">
                    <p>Hello,</p> 
                    <p> I&apos;m <strong><span className="color-name">Udofia</span> Solomon</strong>,</p> 
                    <p className='typewritter'>but my friends know me as <strong>Peau</strong> – a little inside joke...huh? 😄</p> 
                </div>
                <p className="big-text">
                I&apos;m a front-end web developer, and my heart beats for React. 
                </p>
            </div>
            <div data-aos='zoom-in' className="home-image-div">
                <img className="home-image" src="m.png" alt=""/>
            </div>
        </div>
        </section>
    )
}
export default Home