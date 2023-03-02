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

  function handleProfileSelection(event, profileName, action) {
    if (action === 'login') {
      setCurrentProfileName(profileName);

    } else if (action === 'delete') {
      let newProfiles = [];
      let newId = 0;
      for (const profile of profiles) {
        if (profile.id !== Number(event.target.id)) {
          newId += 1;
          profile.id = newId;
          newProfiles.push(profile);
        } else if (profile.id === Number(event.target.id)) {
          setCurrentProfileName('Login');
        }
      }
      localStorage.setItem('profiles', JSON.stringify(newProfiles));
      setProfiles(JSON.parse(window.localStorage.getItem('profiles')));
    }
  }

  function handleToggleDropdown(location) {
    if (location === 'nav') {
      document.getElementsByClassName('profile-selector')[0].classList.toggle('adjust-dropdown-border');
      document.getElementsByClassName('nav-profile-dropdown-items')[0].classList.toggle('show-dropdown');
    } else if (location === 'select') {
      document.getElementsByClassName('existing-profile')[0].classList.toggle('adjust-dropdown-border');
      document.getElementsByClassName('select-profile-dropdown-items')[0].classList.toggle('show-dropdown');
    } else if (location === 'delete') {
      document.getElementsByClassName('delete-profile')[0].classList.toggle('adjust-dropdown-border');
      document.getElementsByClassName('delete-profile-dropdown-items')[0].classList.toggle('show-dropdown');
    }
  }

  window.onclick = function(event) {
    if (!document.getElementsByClassName('profile-selector')[0].contains(event.target) &&
        document.getElementsByClassName('nav-profile-dropdown-items')[0].classList.contains('show-dropdown')) {
          handleToggleDropdown('nav');
    }
    if (!document.getElementsByClassName('existing-profile')[0].contains(event.target) &&
        document.getElementsByClassName('select-profile-dropdown-items')[0].classList.contains('show-dropdown')) {
          handleToggleDropdown('select');
    }
    if (!document.getElementsByClassName('delete-profile')[0].contains(event.target) &&
        document.getElementsByClassName('delete-profile-dropdown-items')[0].classList.contains('show-dropdown')) {
          handleToggleDropdown('delete');
    }
  }

  return (
    <div className="App">
      <Navbar profiles={profiles} currentProfileName={currentProfileName} handleProfileSelection={handleProfileSelection}
      handleToggleDropdown={handleToggleDropdown}/>
      <div className="Body">
        <Body profiles={profiles} handleProfileSelection={handleProfileSelection} 
        handleToggleDropdown={handleToggleDropdown} setProfiles={setProfiles}/>
      </div>
    </div>
  );
}

export default App;
