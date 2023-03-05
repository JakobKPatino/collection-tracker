import { useState } from "react";

function CollectionPage({setVisiblePage, currentProfile, handleToggleDropdown}) {

  const [collectionName, setCollectionName] = useState('');
  const [collectionDescription, setCollectionDescription] = useState('');

  function handleClick() {
    setVisiblePage('Account Manager');
  }

  function handleCollectionSelection(collection) {
    setCollectionName(collection.name);
    setCollectionDescription(collection.description);
  }

  return (
    <main className="collection-page">
      <div className="collection-page-container">
        <div className="collection-dropdown-container">
          <h2>{currentProfile.profileName}'s Collections:</h2>
          <div className="collection-dropdown">
            <button className="collections" onClick={() => handleToggleDropdown('collections')}>
              Select collection
            </button>
            <div className="collections-dropdown-items">
              {currentProfile.collections.map((collection) => (
                <button className='dropdown-item' id={collection.id} 
                        key={collection.id} onClick={() => handleCollectionSelection(collection)}>
                  {collection.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="collection-display-container">
          {currentProfile.collections[0].collectionItems.map((item) => (
            <div className="collection-grid-element" key={item.id}>
              <div className="collection-item-container">
                <div className="collection-image">
                  <div className="temp">Temp</div>
                </div>
                <div className="collection-text">
                  <p className="item-name">{item.name}</p>
                  <button className="item-details-button">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="change" onClick={handleClick}>
            Go to Account Manager
        </button>
      </div>
    </main>
  );
}

export default CollectionPage;