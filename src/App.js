import { useEffect, useState } from "react";
import Body from "./Body";
import Navbar from "./Navbar";

function App() {

  const [profiles, setProfiles] = useState([]);

  const [currentProfileName, setCurrentProfileName] = useState('Login')
  const [currentProfile, setCurrentProfile] = useState(null)
  const [visiblePage, setVisiblePage] = useState('Account Manager');
  const [currentCollection, setCurrentCollection] = useState({
    collectionItems: [],
  });
  const [currentCollectionName, setCurrentCollectionName] = useState('Select collection');
  const [visibleWindow, setVisibleWindow] = useState('none');
  const [currentItem, setCurrentItem] = useState({
    name: ''
  });

  useEffect(() => {
    document.title = 'Collection Tracker';
    localStorage.clear();
    /*const emptyProfiles = []
    if (localStorage.length === 0) {
      localStorage.setItem('profiles', JSON.stringify(emptyProfiles));
      console.log(JSON.parse(window.localStorage.getItem('profiles')))
    }
    setProfiles(JSON.parse(window.localStorage.getItem('profiles')));*/
  }, []);

  function handleProfileSelection(event, profile, action) {
    if (action === 'login') {
      setCurrentProfileName(profile.profileName);
      setCurrentProfile(profile);
      setVisiblePage('Collection Page');
      setCurrentCollection({
        collectionItems: [],
      });
      setCurrentCollectionName('Select collection');
      setVisibleWindow('none')

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
          setCurrentProfile(null);
        }
      }
      localStorage.setItem('profiles', JSON.stringify(newProfiles));
      setProfiles(JSON.parse(window.localStorage.getItem('profiles')));

      if (profiles.length === 1) {
        document.getElementsByClassName('delete-profile')[0].classList.toggle('adjust-dropdown-border');
        document.getElementsByClassName('delete-profile-dropdown-items')[0].classList.toggle('show-dropdown');
      }
    }
  }

  function handleToggleDropdown(location) {
    if (profiles.length !== 0) {
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
    if (currentProfile !== null) {
      if (currentProfile.collections.length !== 0) {
        if (location === 'collections') {
          document.getElementsByClassName('collections')[0].classList.toggle('adjust-dropdown-border');
          document.getElementsByClassName('collections-dropdown-items')[0].classList.toggle('show-dropdown');
        }
      }
    }
  }

  window.onclick = function(event) {
    if (!document.getElementsByClassName('profile-selector')[0].contains(event.target) &&
        document.getElementsByClassName('nav-profile-dropdown-items')[0].classList.contains('show-dropdown')) {
          handleToggleDropdown('nav');
    }
    if (visiblePage === 'Account Manager') {
      if (!document.getElementsByClassName('existing-profile')[0].contains(event.target) &&
        document.getElementsByClassName('select-profile-dropdown-items')[0].classList.contains('show-dropdown')) {
          handleToggleDropdown('select');
      }
      if (!document.getElementsByClassName('delete-profile')[0].contains(event.target) &&
          document.getElementsByClassName('delete-profile-dropdown-items')[0].classList.contains('show-dropdown')) {
            handleToggleDropdown('delete');
      }
    } else if (visiblePage === 'Collection Page') {
      if (!document.getElementsByClassName('collections')[0].contains(event.target) &&
          document.getElementsByClassName('collections-dropdown-items')[0].classList.contains('show-dropdown')) {
            handleToggleDropdown('collections');
      }
    }
  }

  return (
    <div className="App">
      <Navbar profiles={profiles} currentProfileName={currentProfileName} 
      handleProfileSelection={handleProfileSelection}
      handleToggleDropdown={handleToggleDropdown} setVisiblePage={setVisiblePage}/>
      <div className="Body">
        <Body profiles={profiles} handleProfileSelection={handleProfileSelection} 
        handleToggleDropdown={handleToggleDropdown} setProfiles={setProfiles}
        currentProfile={currentProfile} visiblePage={visiblePage}
        currentCollection={currentCollection} setCurrentCollection={setCurrentCollection} 
        visibleWindow={visibleWindow} setVisibleWindow={setVisibleWindow} 
        currentCollectionName={currentCollectionName} setCurrentCollectionName={setCurrentCollectionName}
        currentItem={currentItem} setCurrentItem={setCurrentItem}/>
      </div>
    </div>
  );
}

export default App;
