import "../css/About.css"
import photo from "../components/Assets/Subject.png"
import book from "../components/Assets/book.png"

function About(){
    return <div id="About">
        <div className="About-Title-Container">
            <h2>Since you are here...</h2>
            <h1>Here are some fun facts <span className="About-Name-Highlight">About Me!</span></h1>
        </div>
        <div className="About-Container">
            <div className="About-Description-Container">
                <div className="About-tophalf">
                    <div className="About-Descrition-Text-Container">
                        <img src={book} alt='Icon of Book'/>
                        <h1>Education - B.S. at University of Maryland Baltimore County.
                        </h1>
                    </div>
                    <div className="About-Descrition-Text-Container">
                        <img src={book} alt='Icon of Book'/>
                        <h1>Research - Assisting at the DAMS Lab at UMBC, with GenAIPA Project.
                        </h1>
                    </div>
                </div>
            
                <div className="About-Descrition-Body-Container">
                    <h2>Hello Yall! My name is Sean Belon. Currently a senior at UMBC.
                        I'm fairly sorry if the website looks "meh". This isn't really my specialty but I like to dabble in all forms of code.
                        Currently assisting with research at the DAMS research lab under Roberto Yus.
                    </h2>
                </div>
            </div>
            <div className="About-Img-Container">
                <img src={photo} alt='Sean Belon Cover'/>
            </div>
        </div>
    </div>
  }
  
  export default About