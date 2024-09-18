import "../css/Projects.css"
import hand from "../components/Assets/hand.png"
import reactLogo from "../components/Assets/ReactLogo.png"
import animeGirl from "../components/Assets/aiTuber.png"
import credly from "../components/Assets/CyberEssentials.png"
import vrChat from "../components/Assets/vrChatNoBG.png"

function Projects(){
    return <div id="Projects">
        <div className="Projects-Container">
            <div className="Projects-Title-Container">
                <h2>You are still here?</h2>
                <h1>Then check out my <span className="Profile-Name-Highlight">Projects and Certifications</span></h1>
            </div>
            <div className="Projects-Description-Container">
                <div className="Project-Article-Container">
                    <img src={hand} alt="Hand sign for ML/ASL website"/>
                    <h1>ML/ASL Interpreter Website</h1>
                    <button onClick={(e) => {window.location.href='https://mlasl.netlify.app/'}}>Link to Page</button>
                    <button onClick={(e) => {window.location.href='https://github.com/Dream-Yami/ML_ASL/tree/main/AI_ASL'}}>Link to Github</button>
                </div>
                <div className="Project-Article-Container">
                    <img src={reactLogo} alt="Link back to top of website"/>
                    <h1>This Website! Made all on React</h1>
                    <button onClick={(e) => {window.location.href='#Home'}}>Link to Page</button>
                </div>
                <div className="Project-Article-Container">
                    <img src={animeGirl} alt="Link to JIRA page"/>
                    <h1>OpenAI powered VTuber. In Progress</h1>
                    <button onClick={(e) => {window.location.href='https://bg-bot.atlassian.net/jira/software/projects/SCRUM/boards/1/timeline?shared=&atlOrigin=eyJpIjoiYmJiZmZhZDkxZGI5NDU4NDk5NzVjMzRjZTYxMTY5MjQiLCJwIjoiaiJ9'}}>Link to Jira</button>
                </div>
                <div className="Project-Article-Container">
                    <img src={credly} alt="Link to Credly Page"/>
                    <h1>Cisco Cyber Essentials Certification</h1>
                    <button onClick={(e) => {window.location.href='https://www.credly.com/badges/c5e2ee04-6706-41af-9d19-1e8bd14e315d/public_url'}}>Link to Credly</button>
                </div>
                <div className="Project-Article-Container">
                    <img src={vrChat} alt="Link to Contact"/>
                    <h1>Home-Brewed Full Body Tracking Units</h1>
                    <button href="mailto:sbelon1@umbc.edu">Contact Me</button>
                    {/* fix later */}
                </div>
            </div>
        </div>
    </div>
  }
  
  export default Projects