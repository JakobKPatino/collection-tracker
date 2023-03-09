import { useState } from "react";

function CollectionDetailsPage({handleWindowBack, currentItem, setCurrentItem, 
profiles, setProfiles, currentProfile, currentCollection, setVisibleWindow}) {

  const [updating, setUpdating] = useState(false);
  const [updatedItemName, setUpdatedItemName] = useState(currentItem.name);
  const [updatedItemDescription, setUpdatedItemDescription] = useState(currentItem.description);
  const [updatedItemStatus, setUpdatedItemStatus] = useState(currentItem.owned);

  function handleSubmit(e) {

    e.preventDefault();

    currentItem.name = updatedItemName;
    currentItem.description = updatedItemDescription;
    currentItem.owned = updatedItemStatus;

    let updatedCollectionItems = [];
    for (let item of currentCollection.collectionItems) {
      if (item.id === currentItem.id) {
        item = currentItem;
      }
      updatedCollectionItems.push(item);
    }
    currentCollection.collectionItems = updatedCollectionItems;

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

    setUpdating(false);
  }

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
      {!updating && <div className="collection-details-display">
        <h2 className="item-name-header">{currentItem.name}</h2>
        {currentItem.owned && <p className="item-status">Status: Owned</p>}
        {!currentItem.owned && <p className="item-status">Status: Not Owned</p>}
        <p className="description">{currentItem.description}</p>
        <div className="button-container">
          <button className="delete-item-button" onClick={handleDeleteItem}>
            Delete
          </button>
          <button className="edit-item-button" onClick={() => setUpdating(true)}>
            Edit
          </button>
        </div>
      </div>}
      {updating && <form className="collection-details-update" onSubmit={handleSubmit}>
        <input className="update-item-name-input"
          maxLength='26'
          type="text"
          required
          value={updatedItemName}
          onChange={(e) => setUpdatedItemName(e.target.value)}
        />

        <h2 className="check-status">Item owned?</h2>
        {currentItem.owned && <input className="checkbox"
          type='checkbox'
          id="item-status"
          checked={updatedItemStatus}
          onChange={(e) => setUpdatedItemStatus(e.target.checked)}
        />}
        {!currentItem.owned && <input className="checkbox"
          type='checkbox'
          id="item-status"
          onChange={(e) => setUpdatedItemStatus(e.target.checked)}
        />}

        <textarea className="update-item-description-input"
        required
        value={updatedItemDescription}
        onChange={(e) => setUpdatedItemDescription(e.target.value)}
        ></textarea>

        <button className="update-item-button">
          Update
        </button>
      </form>}
      
      <button className="back-button" onClick={handleWindowBack}>Back to collection</button>
    </div>
  )
}

export default CollectionDetailsPage;