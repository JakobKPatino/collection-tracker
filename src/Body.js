import AccountManager from "./AccountManager";
import CollectionPage from "./CollectionPage";

function Body({profiles, handleProfileSelection,
  handleToggleDropdown, setProfiles, currentProfile, visiblePage, 
  setVisiblePage, currentCollection, setCurrentCollection, visibleWindow,
  setVisibleWindow, currentCollectionName, setCurrentCollectionName}) {

  return (
    <main>
      {visiblePage === 'Account Manager' && <AccountManager profiles={profiles} 
      handleProfileSelection={handleProfileSelection} handleToggleDropdown={handleToggleDropdown}
      setProfiles={setProfiles}/>}
      {visiblePage === 'Collection Page' && <CollectionPage currentProfile={currentProfile} 
      handleToggleDropdown={handleToggleDropdown} profiles={profiles} 
      setProfiles={setProfiles} currentCollection={currentCollection}
      setCurrentCollection={setCurrentCollection} visibleWindow={visibleWindow}
      setVisibleWindow={setVisibleWindow} currentCollectionName={currentCollectionName}
      setCurrentCollectionName={setCurrentCollectionName}/>}
    </main>
  );
}

export default Body;