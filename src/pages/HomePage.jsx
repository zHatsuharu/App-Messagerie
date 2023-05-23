import NavBar from "../components/navbar"
import '../assets/style/Home.style.css'

const HomePage = () => {


    return (
        <div>
            <NavBar islogged={true}/>
            <div id='home-page'>
                <p>Hello, welcome to our desktop chat app, coded with our love and electron</p>
                <div id="auth">
                    <h2>Create or connect to an account</h2>
                    <div id="buttons">
                        <button id="Button-Home">Sign in</button>
                        <button>Register</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HomePage