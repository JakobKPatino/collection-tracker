import { useEffect } from "react";
import Body from "./Body";
import Navbar from "./Navbar";

function App() {

  useEffect(() => {
    document.title = 'Collection Tracker';
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="Body">
        <Body />
      </div>
    </div>
  );
}

export default App;
