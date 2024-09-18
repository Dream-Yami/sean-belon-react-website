import "../css/Profile.css"
import photo from "../components/Assets/coverPhoto.png"

function Profile(){
    return <div id="Home">
        <div className="Profile-Container">
            <div className="Profile-Img-Container">
                <img src={photo} alt='Sean Belon Cover'/>
            </div>
            <div className="Profile-Description-Container">
                <h2>Hello Y'all! My name is</h2>
                <h1><span className="Profile-Name-Highlight">Sean Belon</span></h1>
                <h2>A Senior at University Of Maryland Baltimore County</h2>
            </div>
        </div>
    </div>
  }
  
  export default Profile