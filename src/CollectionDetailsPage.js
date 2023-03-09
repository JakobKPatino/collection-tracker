function CollectionDetailsPage({handleWindowBack, currentItem, setCurrentItem, 
profiles, setProfiles, currentProfile, currentCollection, setVisibleWindow}) {

  function handleDeleteItem() {
    console.log('delete');

    let updatedCollectionItems = [];
    let newId = 0;
    for (const item of currentCollection.collectionItems) {
      if (item.id !== currentItem.id) {
        newId += 1;
        item.id = newId;
        updatedCollectionItems.push(item);
      }
    }
    currentCollection.collectionItems = updatedCollectionItems;

    let updatedCollections = [];
    for (let collection of currentProfile.collections) {
      if (collection.id === currentCollection.id) {
        collection = currentCollection;
      }
      updatedCollections.push(collection)
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

    setCurrentItem({
      name: ''
    });
    setVisibleWindow('collection-items');
  }

  return (
    <div className="collection-details-page-container">
      <div className="collection-details-display">
        <h2 className="item-name-header">{currentItem.name}</h2>
        {currentItem.owned && <p className="item-status">Status: Owned</p>}
        {!currentItem.owned && <p className="item-status">Status: Not Owned</p>}
        <p className="description">{currentItem.description}</p>
        <div className="button-container">
          <button className="delete-item-button" onClick={handleDeleteItem}>
            Delete
          </button>
          <button className="edit-item-button">
            Edit
          </button>
        </div>
      </div>
      <button className="back-button" onClick={handleWindowBack}>Back to collection</button>
    </div>
  )
}

export default CollectionDetailsPage;