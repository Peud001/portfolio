import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Portfolio = () => {

    useEffect(() => {
        AOS.init(
            {
                duration: 2000,
                delay: 200,
            }
        )
    }, [])

    return(
        <section data-aos='fade-right' id="portfolio" className="work-section">
        <div className="portfolio set-space">
            <h2>My Work</h2>
            <div className="portfolio-items">
                <div  className="work">
                    <img src="proj1.png"/>
                    <div className="work-text">
                        <h3>Airtime and internet data <br/>
                        subscription App</h3>
                        <p>In this app, users can make <br/>
                        airtime and internet data <br/>subscription and the amount gets <br/> deducted from their balance</p>
                        <img className="link-icon" src="icons/link.png"/>    
                    </div>
                </div>     
                <div className="work">
                    <img src="cat.png"/>
                    <div className="work-text"> 
                        <h3>Task Manager</h3>
                        <p>In this app, users can <br/>
                        add and keep track of their <br/>
                        daily task</p>
                        <img className="link-icon" src="icons/link.png"/> 
                    </div>    
                </div>
                <div className="work">
                    <img src="cat.png"/>
                    <div className="work-text">
                      <h3>Business Website</h3>
                      <p>This webdite creates a synegy <br/>
                      between company and client </p>
                      <img className="link-icon" src="icons/link.png"/> 
                    </div>  
                </div>
            </div>
            </div>
        </section>
    )
}
export default Portfolio