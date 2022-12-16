import Navbar from "./Navbar";
import Login from "./Login";
import Feed from "./Feed";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [feed, setFeed] = useState(false);

  function setFeedSection() {
    setFeed(true);
  }

  return (
    <Router>
      <div className="app-container">
        <Navbar setFeedSection={setFeedSection} />
        <Routes>
          <Route path="/" element={<Navigate to="/feed" />} />
          <Route path="/feed" element={<Feed />} />
          <Route
            path="/login"
            element={<Login setFeedSection={setFeedSection} />}
          />
        </Routes>
        {feed && <div>Feed section is true</div>}
      </div>
    </Router>
  );
}

export default App;
