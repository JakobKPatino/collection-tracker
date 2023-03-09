import AddCollectionItemPage from "./AddCollectionItemPage";
import AddCollectionPage from "./AddCollectionPage";
import CollectionDetailsPage from "./CollectionDetailsPage";

function CollectionPage({currentProfile, handleToggleDropdown,
profiles, setProfiles, currentCollection, setCurrentCollection, visibleWindow,
setVisibleWindow, currentCollectionName, setCurrentCollectionName,
currentItem, setCurrentItem}) {

  function handleWindowToDetails(e) {
    setVisibleWindow('collection-details');
    for (const item of currentCollection.collectionItems) {
      if (item.id === Number(e.target.id)) {
        setCurrentItem(item);
      }
    }
  }

  function handleCollectionSelection(collection) {
    setCurrentCollection(collection);
    setCurrentCollectionName(collection.name);
    if (visibleWindow !== 'collection-items') {
      setVisibleWindow('collection-items');
    }
  }

  function handleWindowBack() {
    if (currentCollectionName === 'Select collection') {
      setVisibleWindow('none');
    } else if (currentCollectionName !== 'Select collection') {
      setVisibleWindow('collection-items');
    }
  }

  function handleStatus(item) {
    if (item.owned) {
      item.owned = false;
    } else if (!item.owned) {
      item.owned = true;
    }

    let updatedCollections = [];
    for (let collection of currentProfile.collections) {
      if (collection.id === currentCollection.id) {
        collection = currentCollection;
      }
      updatedCollections.push(collection);
    }

    currentProfile.collections = updatedCollections;

    let updatedProfiles = [];
    for (let profile of profiles) {
      if (profile.id === currentProfile.id) {
        profile = currentProfile;
      }
      updatedProfiles.push(profile);
    }

    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
    setProfiles(JSON.parse(window.localStorage.getItem('profiles')));
  }

  function handleDeleteCollection() {
    let updatedCollections = [];
    let newId = 0;
    for (const collection of currentProfile.collections) {
      if (collection.id !== currentCollection.id) {
        newId += 1;
        collection.id = newId;
        updatedCollections.push(collection);
      }
    }
    currentProfile.collections = updatedCollections;

    let updatedProfiles = [];
    for (let profile of profiles) {
      if (profile.id === currentProfile.id) {
        profile = currentProfile;
      }
      updatedProfiles.push(profile);
    }

    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
    setProfiles(JSON.parse(window.localStorage.getItem('profiles')));

    setCurrentCollectionName('Select collection');
    setCurrentCollection({
      collectionItems: [],
    });
    setVisibleWindow('none');
  }

  return (
    <main className="collection-page">
      <div className="collection-page-container">
        <div className="collection-container">
          <div className="collection-dropdown-container">
            <h2>{currentProfile.profileName}'s Collections:</h2>
            <div className="collection-dropdown">
              <button className="collections" onClick={() => handleToggleDropdown('collections')}>
                {currentCollectionName}
              </button>
              <div className="collections-dropdown-items">
                {currentProfile.collections.map((collection) => (
                  <button className='dropdown-item' id={collection.id} 
                          key={collection.id} onClick={() => handleCollectionSelection(collection)}>
                    {collection.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button className="add-collection-button" 
          onClick={() => setVisibleWindow('add-collection')}>
            +
          </button>
        </div>  
        {visibleWindow === 'none' &&
        <div className="no-collection-container">
          <h2 className="no-collection-selected">No Collection Selected</h2>
        </div>}
        {visibleWindow === 'collection-items' &&
        <div className="collection-handler">
          <div className="collection-display-container">
            {currentCollection.collectionItems.map((item) => (
              <div className="collection-grid-element" key={item.id}>
                <div className="collection-item-container">
                  {item.owned && <button className="item-owned" onClick={() => handleStatus(item)}>
                    Owned
                  </button>}
                  {!item.owned && <button className="item-not-owned" onClick={() => handleStatus(item)}>
                    Not Owned
                  </button>}
                  <div className="collection-text">
                    <p className="item-name">{item.name}</p>
                    <div className="item-details-button-container">
                      <button className="item-details-button" id={item.id} onClick={(event) => handleWindowToDetails(event)}>
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="collection-grid-element">
              <div className="add-collection-item-button-container">
                <button className="add-collection-item-button" 
                onClick={() => setVisibleWindow('add-collection-item')}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="delete-collection-button-container">
            <button className="delete-collection-button" onClick={handleDeleteCollection}>
              Delete collection
            </button>
          </div>
        </div>}
        {visibleWindow === 'collection-details' &&
        <CollectionDetailsPage handleWindowBack={handleWindowBack} currentItem={currentItem}
        setCurrentItem={setCurrentItem} profiles={profiles} setProfiles={setProfiles}
        currentProfile={currentProfile} currentCollection={currentCollection} setVisibleWindow={setVisibleWindow}/>}
        {visibleWindow === 'add-collection' &&
        <AddCollectionPage handleWindowBack={handleWindowBack} currentProfile={currentProfile}
        profiles={profiles} setProfiles={setProfiles} setCurrentCollection={setCurrentCollection} 
        setCurrentCollectionName={setCurrentCollectionName} setVisibleWindow={setVisibleWindow}/>}
        {visibleWindow === 'add-collection-item' &&
        <AddCollectionItemPage handleWindowBack={handleWindowBack} currentCollection={currentCollection}
        currentProfile={currentProfile} profiles={profiles} setProfiles={setProfiles}/>}
      </div>
    </main>
  );
}

export default CollectionPage;