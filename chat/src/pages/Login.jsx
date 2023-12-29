// registration form page
import "../index.scss";
import Img from "../assets/icons8-image-144.png";

function Login(){
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chatify</span>
                <span className="title">Register</span>
                <form>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Sign In</button>
                </form>
                <p>New account? SignUp</p>
            </div>
        </div>
    )
}

export default Login;