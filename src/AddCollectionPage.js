import { useState } from "react";

function AddCollectionPage({handleWindowBack, currentProfile, profiles, setProfiles}) {

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
    for (const profile of profiles) {
      updatedProfiles.push(profile);
    }

    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
    setProfiles(JSON.parse(window.localStorage.getItem('profiles')));

    setNewCollectionName('');
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
        <button className="add-collection-input-button">Add Collection</button>
      </form>
      <button className="back-button" onClick={handleWindowBack}>Back</button>
    </div>
  )
}

export default AddCollectionPage;