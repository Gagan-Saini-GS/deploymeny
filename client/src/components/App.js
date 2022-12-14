import Navbar from "./Navbar";
import Login from "./Login";
import Feed from "./Feed";
import { useState } from "react";

function App() {
  const [feed, setFeed] = useState(false);
  const [data, setData] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  function loadAppPage() {
    setFeed(true);

    fetch("/currentUser", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        accessToken: localStorage.getItem("accessToken"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.user);
        setCurrentUser(data.user);
      });

    fetch("/feed")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }

  return (
    <div className="app-container">
      <Navbar />
      {feed ? (
        <Feed currentUser={currentUser} data={data} />
      ) : (
        <Login loadAppPage={loadAppPage} />
      )}
    </div>
  );
}

export default App;
