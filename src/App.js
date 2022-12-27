import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
import Login from "./Components/login";
import Game from "./Components/game";
import whales from "./Assets/whales2.mp4";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <video src={whales} autoPlay loop muted />
      {user ? (
        <>
          <Game />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
