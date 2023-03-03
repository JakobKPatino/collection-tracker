import AccountManager from "./AccountManager";
import CollectionPage from "./CollectionPage";

function Body({profiles, handleProfileSelection,
  handleToggleDropdown, setProfiles, currentProfile,
  visiblePage, setVisiblePage}) {

  return (
    <main>
      {visiblePage === 'Account Manager' && <AccountManager profiles={profiles} 
      handleProfileSelection={handleProfileSelection} handleToggleDropdown={handleToggleDropdown}
      setProfiles={setProfiles}/>}
      {visiblePage === 'Collection Page' && <CollectionPage setVisiblePage={setVisiblePage} 
      currentProfile={currentProfile}/>}
    </main>
  );
}

export default Body;