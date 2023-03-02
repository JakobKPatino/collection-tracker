function ProfileDropdown({profiles, handleProfileSelection, profileDropdownItems}) {

  return (
    <div className={profileDropdownItems}>
      {profiles.map((profile) => (
        <button className='dropdown-item' key={profile.id} onClick={() => handleProfileSelection(profile.profileName)}>
          {profile.profileName}
        </button>
      ))}
    </div>
  );
}

export default ProfileDropdown;