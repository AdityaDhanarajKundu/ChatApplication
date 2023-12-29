// registration form page
import "../index.scss";
import Img from "../assets/icons8-image-144.png";

function Register(){
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chatify</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="file" id="file" style={{display: "none"}} />
                    <label htmlFor="file">
                        <img src={Img} alt="image"/>
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Do you have an account? Login</p>
            </div>
        </div>
    )
}

export default Register;