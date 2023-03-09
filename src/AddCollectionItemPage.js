import { useState } from "react";

function AddCollectionItemPage({handleWindowBack, currentCollection, currentProfile,
profiles, setProfiles}) {

  const [newItemName, setNewItemName] = useState('');
  const [newItemDescription, setNewItemDescription] = useState('');
  const [newItemStatus, setNewItemStatus] = useState(null);
  
  function handleSubmit(e) {

    e.preventDefault();

    let itemId = currentCollection.collectionItems.length + 1;
    let newCollectionItem = {
      name: newItemName,
      description: newItemDescription,
      owned: newItemStatus,
      id: itemId
    }
    currentCollection.collectionItems.push(newCollectionItem);

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

    handleWindowBack();
  }

  return (
    <div className="add-item-page-container">
      <form className="new-item-input-container" onSubmit={handleSubmit}>
        <h2 className="enter-item-name">Enter item name</h2>
        <input className="new-item-name-input"
          maxLength='26'
          type="text"
          required
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />

        <h2 className="check-status">Item owned?</h2>
        <input className="checkbox"
          type='checkbox'
          id="item-status"
          onChange={(e) => setNewItemStatus(e.target.checked)}
        />

        <h2 className="enter-item-description">Enter item description</h2>
        <textarea className="new-item-description-input"
          required
          value={newItemDescription}
          onChange={(e) => setNewItemDescription(e.target.value)}
        ></textarea>

        <button className="add-item-input-button">Add item</button>
      </form>
      <button className="back-button" onClick={handleWindowBack}>Back to collection</button>
    </div>
  )
}

export default AddCollectionItemPage;