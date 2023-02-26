import { useState } from 'react';
import profilePicture from './images/joshu.jpg';

function Navbar({profiles}) {

  let [profileName, setProfileName] = useState('Login')

  function handleToggleDropdown() {
    document.getElementsByClassName('profile-selector')[0].classList.toggle('adjust-nav-dropdown-border');
    document.getElementsByClassName('profile-dropdown-items')[0].classList.toggle('show-dropdown');
  }

  window.onclick = function(event) {
    if (!document.getElementsByClassName('profile-selector')[0].contains(event.target) &&
        document.getElementsByClassName('profile-dropdown-items')[0].classList.contains('show-dropdown')) {
          handleToggleDropdown();
    }
  }

  function handleProfileSelection(profileName) {
    setProfileName(profileName);
  }

  return (
    <nav className="navbar">
      <p className='webpage-title'>Collection Tracker</p>
      <div className="nav-profile-dropdown">
        <button className="profile-selector" onClick={handleToggleDropdown}>
          <span className="profile-selector-contents">
            <p>{profileName}</p>
            <img className="profile-picture" src={profilePicture} alt="profile icon" />
          </span>
        </button>
        <div className="profile-dropdown-items">
          {profiles.map((profile) => (
            <button className='dropdown-item' key={profile.id} onClick={() => handleProfileSelection(profile.profileName)}>
              {profile.profileName}
            </button>
          ))}
        </div>
      </div>  
      

    </nav>
  );
}

export default Navbar;