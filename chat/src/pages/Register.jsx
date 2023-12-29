// registration form page
import "../index.scss";

function Register(){
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">LamaChat</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="file" id="file"/>
                    <button>Sign Up</button>
                </form>
                <p>Do you have an account? Login</p>
            </div>
        </div>
    )
}

export default Register;