import "../css/Contact.css"
import gmail from "../components/Assets/gmail.png"
import linkedin from "../components/Assets/LinkedIn_logo_initials-removebg-preview.png"

function Contact(){
    return <div id="Contacts">
        <div className="Contact-Container">
            <div className="Contact-Title-Container">
                <h2>Since you are already here</h2>
                <h1>Then why don't you <span className="Contact-Name-Highlight">Contact Me!</span></h1>
            </div>
            <div className="Contact-Container-Block">
                <div className="Contact-Block">
                    <img src={gmail} alt="Gmail Link to contact me"/>
                    <h2>
                        <span className="Contact-Name-Highlight">
                        <a href="mailto:sbelon1@umbc.edu">Gmail</a>
                        </span>
                    </h2>
                </div>

                <div className="Contact-Block">
                    <img src={linkedin} alt="Linkedin Link"/>
                    <h2>
                        <span className="Contact-Name-Highlight">
                            <a href="https://www.linkedin.com/in/sean-belon/">Linkedin</a>
                        </span>
                    </h2>
                </div>
            </div>
        </div>
    </div>
  }
  
  export default Contact