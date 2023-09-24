

const Contact = () => {
    return(
        <section id="contact" className="contact">
            <div className="contact-items set-space">
                <div className="contact-left">
                    <h2>Contact Me</h2>
                    <p><img src='icons/send.png'/>meetsolomonudofia11@gmail.com</p>
                    <p><img src='icons/phone.png'/>+2349033040248</p>
                    <div>
                        <img src="icons/linkedin.png"/>
                        <img src="icons/twitter.jpeg"/>
                        <img src="icons/github.png"/>
                    </div>
                    <a href="icons/mycv.pdf" target="_blank" rel="noreferrer" download><button className="btn-download">Download CV</button></a>
                </div>
                <div className="contact-right">
                    <form>
                      <input 
                        type="text"
                        placeholder="Your Name"
                      />
                      <input 
                        type="email"
                        placeholder="Your Email"
                      />
                      <textarea rows='6'>Your Message</textarea>
                      <button className='btn-submit' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact