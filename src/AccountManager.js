import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

function AccountManager({profiles, handleProfileSelection, 
  handleToggleDropdown, setProfiles}) {

  const [newProfileName, setNewProfileName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const profileId = profiles.length + 1;
    const newProfile = {
      profileName: newProfileName,
      collections: [{
        title: 'Temp Collection',
        collectionItems: [{
          name: 'Temp Item',
          description: '',
          id: 1
        }],
        id: 1
      }],
      id: profileId
    }

    let newProfiles = [];
    for (const profile of profiles) {
      newProfiles.push(profile);
    }
    newProfiles.push(newProfile)

    localStorage.setItem('profiles', JSON.stringify(newProfiles));
    setProfiles(JSON.parse(window.localStorage.getItem('profiles')));

    setNewProfileName('');
  }

  return (
    <main className="account-manager">
      <div className="existing-new-delete">
        <div className="existing-account-container">
          <div className="existing-account">
            <h2>Login</h2>
            <div className="existing-profile-dropdown">
              <button className="existing-profile" onClick={() => handleToggleDropdown('select')}>
                Select existing profile
              </button>
              <ProfileDropdown profiles={profiles} handleProfileSelection={handleProfileSelection}
              profileDropdownItems={'select-profile-dropdown-items'} buttonAction={'login'}/>
            </div>
          </div>
        </div>
        <div className="new-account-container">
          <div className="new-account">
            <h2>Create a new profile</h2>
          </div>
          <form className="new-profile-input-container" onSubmit={handleSubmit}>
            <input className="new-profile-input"
              type="text"
              maxLength='12'
              required
              value={newProfileName}
              onChange={(e) => setNewProfileName(e.target.value)}
            />
            <button className="add-profile-button">Add Profile</button>
          </form>
        </div>
        <div className="delete-account-container">
          <div className="delete-account">
            <h2>Delete a profile</h2>
          </div>
          <div className="delete-profile-dropdown">
            <button className="delete-profile" onClick={() => handleToggleDropdown('delete')}>
              Delete exisitng profile
            </button>
            <ProfileDropdown profiles={profiles} handleProfileSelection={handleProfileSelection}
            profileDropdownItems={'delete-profile-dropdown-items'} buttonAction={'delete'}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AccountManager;