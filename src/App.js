import { useEffect, useState } from "react";
import Body from "./Body";
import Navbar from "./Navbar";

function App() {

  const [profiles, setProfiles] = useState([]);
  let [currentProfileName, setCurrentProfileName] = useState('Login')

  useEffect(() => {
    document.title = 'Collection Tracker';
    setProfiles(JSON.parse(window.localStorage.getItem('profiles')));
  }, []);

  function handleProfileSelection(profileName) {
    setCurrentProfileName(profileName);
  }

  function handleToggleDropdown(location) {
    if (location === 'nav') {
      document.getElementsByClassName('profile-selector')[0].classList.toggle('adjust-dropdown-border');
      document.getElementsByClassName('nav-profile-dropdown-items')[0].classList.toggle('show-dropdown');
    } else if (location === 'body') {
      document.getElementsByClassName('existing-profile')[0].classList.toggle('adjust-dropdown-border');
      document.getElementsByClassName('body-profile-dropdown-items')[0].classList.toggle('show-dropdown');
    }
  }

  window.onclick = function(event) {
    if (!document.getElementsByClassName('profile-selector')[0].contains(event.target) &&
        document.getElementsByClassName('nav-profile-dropdown-items')[0].classList.contains('show-dropdown')) {
          handleToggleDropdown('nav');
    }
    if (!document.getElementsByClassName('existing-profile')[0].contains(event.target) &&
        document.getElementsByClassName('body-profile-dropdown-items')[0].classList.contains('show-dropdown')) {
          handleToggleDropdown('body');
    }
  }

  return (
    <div className="App">
      <Navbar profiles={profiles} currentProfileName={currentProfileName} handleProfileSelection={handleProfileSelection}
      handleToggleDropdown={handleToggleDropdown}/>
      <div className="Body">
        <Body profiles={profiles} handleProfileSelection={handleProfileSelection} 
        handleToggleDropdown={handleToggleDropdown}/>
      </div>
    </div>
  );
}

export default App;
