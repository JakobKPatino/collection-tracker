import { useEffect } from "react";
import Navbar from "./Navbar";

function App() {

  useEffect(() => {
    document.title = 'Collection Tracker';
  }, []);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
