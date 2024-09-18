import "../css/Footer.css"

function Footer(){
    return <div id="Footer">
        <div className="Footer-Container">
            <div className="Footer-Links">
                <a href='#Home' className='Footer-Nav-Link'> Home </a>
                <a href='#About' className='Footer-Nav-Link'> About </a>
                <a href='#Projects' className='Footer-Nav-Link'> Projects </a>
                <a href='#Contacts' className='Footer-Nav-Link'> Contacts </a>
            </div>
            <h3>Copyright © 2024 Sean Belon. All Rights Reserved.</h3>
        </div>
    </div>
  }
  
  export default Footer