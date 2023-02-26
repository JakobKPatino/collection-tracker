import { useEffect, useState } from "react";
import Body from "./Body";
import Navbar from "./Navbar";

function App() {

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    document.title = 'Collection Tracker';
    setProfiles(JSON.parse(window.localStorage.getItem('profiles')));
  }, []);

  return (
    <div className="App">
      <Navbar profiles={profiles}/>
      <div className="Body">
        <Body />
      </div>
    </div>
  );
}

export default App;
