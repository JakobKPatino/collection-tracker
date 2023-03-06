import { useState } from "react";
import AddCollectionItemPage from "./AddCollectionItemPage";
import AddCollectionPage from "./AddCollectionPage";
import CollectionDetailsPage from "./CollectionDetailsPage";

function CollectionPage({setVisiblePage, currentProfile, handleToggleDropdown,
profiles, setProfiles}) {

  const [currentCollection, setCurrentCollecion] = useState({
    collectionItems: [],
    id: 1
  });
  const [currentCollectionName, setCurrentCollectionName] = useState('Select collection');
  const [visibleWindow, setVisibleWindow] = useState('none');

  function handlePageToAccounts() {
    setVisiblePage('Account Manager');
  }

  function handleCollectionSelection(collection) {
    setCurrentCollecion(collection);
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
          <h2>No Collection Selected</h2>
        </div>}
        {visibleWindow === 'collection-items' &&
        <div className="collection-display-container">
          {currentCollection.collectionItems.map((item) => (
            <div className="collection-grid-element" key={item.id}>
              <div className="collection-item-container">
                <div className="collection-image">
                  <div className="temp">Temp</div>
                </div>
                <div className="collection-text">
                  <p className="item-name">{item.name}</p>
                  <button className="item-details-button" onClick={() => setVisibleWindow('collection-details')}>
                    Details
                    </button>
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
        </div>}
        {visibleWindow === 'collection-details' &&
        <CollectionDetailsPage handleWindowBack={handleWindowBack}/>}
        {visibleWindow === 'add-collection' &&
        <AddCollectionPage handleWindowBack={handleWindowBack} currentProfile={currentProfile}
        profiles={profiles} setProfiles={setProfiles}/>}
        {visibleWindow === 'add-collection-item' &&
        <AddCollectionItemPage handleWindowBack={handleWindowBack}/>}
        <button className="change" onClick={handlePageToAccounts}>
            Go to Account Manager
        </button>
      </div>
    </main>
  );
}

export default CollectionPage;