import profilePicture from './images/joshu.jpg';
import ProfileDropdown from './ProfileDropdown';

function Navbar({profiles, currentProfileName, 
  handleProfileSelection, handleToggleDropdown, setVisiblePage}) {

  return (
    <nav className="navbar">
      <p className='webpage-title'>Collection Tracker</p>
      <div className="nav-profile-dropdown">
        <button className="profile-selector" onClick={() => handleToggleDropdown('nav')}>
          <span className="profile-selector-contents">
            <p>{currentProfileName}</p>
            <img className="profile-picture" src={profilePicture} alt="profile icon" />
          </span>
        </button>
        <ProfileDropdown profiles={profiles} handleProfileSelection={handleProfileSelection}
        profileDropdownItems={'nav-profile-dropdown-items'} buttonAction={'login'}/>
        <button className='home' onClick={() => setVisiblePage('Account Manager')}>
          Home
        </button>
      </div>  
      

    </nav>
  );
}

export default Navbar;