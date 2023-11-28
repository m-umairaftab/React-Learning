import "./App.css";
// import socketIO from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./component/join/Join";
import Chat from "./component/chat/Chat";

// const ENDPOINT = "http://localhost:4500/";
// const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

function App() {
  // socket.on("connect", () => {});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Join} />
          <Route path="/chat" Component={Chat} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
