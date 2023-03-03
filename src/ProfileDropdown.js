function ProfileDropdown({profiles, handleProfileSelection, 
  profileDropdownItems, buttonAction}) {

  return (
    <div className={profileDropdownItems}>
      {profiles.map((profile) => (
        <button className='dropdown-item' id={profile.id} key={profile.id} 
                onClick={(event) => handleProfileSelection(event, profile, buttonAction)}>
          {profile.profileName}
        </button>
      ))}
    </div>
  );
}

export default ProfileDropdown;