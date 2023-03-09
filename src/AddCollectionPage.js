import { useState } from "react";

function AddCollectionPage({handleWindowBack, currentProfile, profiles, setProfiles,
setCurrentCollection, setCurrentCollectionName, setVisibleWindow}) {

  const [newCollectionName, setNewCollectionName] = useState('');

  function handleSubmit(e) {

    e.preventDefault();

    let collectionId = currentProfile.collections.length + 1;
    let newCollection = {
      name: newCollectionName,
      collectionItems: [],
      id: collectionId
    }
    currentProfile.collections.push(newCollection);

    let updatedProfiles = [];
    for (let profile of profiles) {
      if (profile.id === currentProfile.id) {
        profile = currentProfile;
      }
      updatedProfiles.push(profile);
    }

    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
    setProfiles(JSON.parse(window.localStorage.getItem('profiles')));

    setCurrentCollectionName(newCollectionName);
    for (const collection of currentProfile.collections) {
      if (collection.id === newCollection.id) {
        setCurrentCollection(collection);
      }
    }
    setVisibleWindow('collection-items');
  }

  return (
    <div className="add-collection-page-container">
      <h2 className="enter-collection-name">Enter collection name</h2>
      <form className="new-collection-input-container" onSubmit={handleSubmit}>
        <input className="new-collection-input"
          maxLength='20'
          type="text"
          required
          value={newCollectionName}
          onChange={(e) => setNewCollectionName(e.target.value)}
        />
        <button className="add-collection-input-button">Add collection</button>
      </form>
      <button className="back-button" onClick={handleWindowBack}>Back to collection</button>
    </div>
  )
}

export default AddCollectionPage;