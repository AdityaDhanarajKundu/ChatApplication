// registration form page
import "../index.scss";
import Img from "../assets/icons8-image-144.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function Login(){
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
    } catch (err) {
        setError(true);
    }
  }
    
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chatify</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Sign In</button>
                    {error && <span className="error">Something went wrong!</span>}
                </form>
                <p>New account? <Link to={"/register"}>Register</Link> </p>
            </div>
        </div>
    )
}

export default Login;