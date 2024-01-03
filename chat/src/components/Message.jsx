import { useContext,useRef, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

const Message = ({message}) => {

  const ref = useRef();

  const {data} = useContext(ChatContext);
  const {currentUser} = useContext(AuthContext);

  useEffect(()=>{
    ref.current.scrollIntoView({behavior: "smooth"}); // scroll to the current latest message every time there is new message
  },[message]);
  
  return (
    <div ref={ref} className={`message ${message.senderId === currentUser.uid && "owner"}`}>
      <div className="messageInfo">
        <img src={
          message.senderId === currentUser.uid
          ? currentUser.photoURL
          : data.user.photoURL
        } alt="image" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="image" />}
      </div>
    </div>
  );
}

export default Message;