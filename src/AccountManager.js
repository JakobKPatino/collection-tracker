import ProfileDropdown from "./ProfileDropdown";

function AccountManager({setVisiblePage, profiles, handleProfileSelection,handleToggleDropdown}) {

  return (
    <main className="account-manager">
      <div className="existing-new-delete">
        <div className="existing-account-container">
          <div className="existing-account">
            <h2>Login</h2>
            <div className="existing-profile-dropdown">
              <button className="existing-profile" onClick={() => handleToggleDropdown('body')}>
                Select existing profile
              </button>
              <ProfileDropdown profiles={profiles} handleProfileSelection={handleProfileSelection}
              profileDropdownItems={'body-profile-dropdown-items'}/>
            </div>
          </div>
        </div>
        <div className="new-account-container">
          <div className="new-account">
            <h2>Create a new profile</h2>
          </div>
        </div>
        <div className="delete-account-container">
          <div className="delete-account">
            <h2>Delete a profile</h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AccountManager;