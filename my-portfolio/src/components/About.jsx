import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        AOS.init(
            {
                delay: 200,
            }
        )
    }, [])

    return(
        <section id='about' className="about-section">
        <div className="about set-space">
            <div className="about-image">
              <img src="001.jpg" alt="my-photo"/>
            </div>
            <div className="about-text">
                <h2>About Me</h2>
                <p>lorem*1some text hereI added flex-basis: 0; to the .nav-links class to allow flex-grow to work properly and fill up the remaining space. This should ensure that your nav-links
                </p>
                <div className="skills-section">
                    <h3>Skills</h3>
                    <div className="column">
                        <p data-aos='fade-right' data-aos-duration='100'><img  src="icons/react.png"/><span>React JS</span></p>
                        <p data-aos='fade-right' data-aos-duration='200'><img  src="icons/javascript.png"/><span>Javascript</span></p>
                        <p data-aos='fade-right' data-aos-duration='400'><img src=" icons/html.png"/><span>HTML</span></p>
                        <p data-aos='fade-right' data-aos-duration='500'><img  src=" icons/css.png"/><span>CSS</span></p>
                        <p data-aos='fade-right' data-aos-duration='500'><img  src=" icons/bootstrap.png"/><span>Bootstrap</span></p>
                        <p data-aos='fade-right' data-aos-duration='600'><img  src="icons/firebase.png"/><span>Firebase</span></p>
                        <p data-aos='fade-right' data-aos-duration='700'><img  src="icons/git.png"/><span>Git/Github</span></p>
                    </div>
                </div>
            </div>
            </div>  
        </section>
    )
}
export default About