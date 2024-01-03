import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chatify</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
        <span>Alicia</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
