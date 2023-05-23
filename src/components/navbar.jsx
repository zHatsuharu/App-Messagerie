import '../assets/style/navbar.style.css'
import profile from '../assets/image/profile.png'
import chat from '../assets/image/chat.png'
import { useNavigate } from "react-router-dom"

const NavBar = (props) => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div id='logo'> 
                <button id='button-profile' onClick={()=> navigate('/')}><img id='image-chat' src={chat} alt="chat" /></button>
                <div id='title'>Cat Chat App</div >
            </div>
            {props.islogged ?
            <div id='logged'>
                <button id='button-contact'>Ajouter des contacts</button>
                <button id='button-profile' onClick={() => navigate('/profile') }><img id='image-profile' src={profile} alt="profile" /></button>
            </div>
            :
            null
            }
        </nav>
    );
}

export default NavBar;