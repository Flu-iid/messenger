import "./App.css";
import ChatBox from "./components/ChatBox";
import Header from "./components/Header";
import Emoji from "./components/Emoji";
import MessageBox1 from "./components/MessageBox1";
import MessageBox2 from "./components/MessageBox2";
import { useState } from "react";

function App() {
  const [text, setText] = useState({user:1, message: "" });
  const [textP, setTextP] = useState({user:2, message: "" });
  const [show, setShow] = useState([]);

  return (
    <main>
      <Header />
      <ChatBox show={show} />
      <div>
        <Emoji />
        <MessageBox1 text={text} setText={setText} setShow={setShow} />
        <MessageBox2 text={textP} setText={setTextP} setShow={setShow} />
      </div>
    </main>
  );
}

export default App;
