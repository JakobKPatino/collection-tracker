import profilePicture from './images/joshu.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <p className='webpage-title'>Collection Tracker</p>
      <button className="profile-selector">
        <span className="profile-selector-contents">
          <p>Profile</p>
          <img className="profile-picture" src={profilePicture} alt="profile icon" />
        </span>
       </button>
    </nav>
  );
}

export default Navbar;