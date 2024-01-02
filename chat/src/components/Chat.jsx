import Cam from "../assets/cam.png";
import Add from "../assets/add.png";
import More from "../assets/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Alicia</span>
        <div className="chatIcons">
          <img src={Cam} alt="cam" />
          <img src={Add} alt="add" />
          <img src={More} alt="more" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;