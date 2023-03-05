import { useState } from "react";
import CollectionDetailsPage from "./CollectionDetailsPage";

function CollectionPage({setVisiblePage, currentProfile, handleToggleDropdown}) {

  const [currentCollection, setCurrentCollecion] = useState({
    collectionItems: [],
    id: 1
  });
  const [currentCollectionName, setCurrentCollectionName] = useState('Select collection');
  const [visibleDetails, setVisibleDetails] = useState(false);

  function handlePageToAccounts() {
    setVisiblePage('Account Manager');
  }

  function handleCollectionSelection(collection) {
    setCurrentCollecion(collection);
    setCurrentCollectionName(collection.name);
  }

  return (
    <main className="collection-page">
      <div className="collection-page-container">
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
        {currentCollectionName === 'Select collection' && 
        <h2>No Collection Selected</h2>}
        {currentCollectionName !== 'Select collection' &&
        !visibleDetails &&
        <div className="collection-display-container">
          {currentCollection.collectionItems.map((item) => (
            <div className="collection-grid-element" key={item.id}>
              <div className="collection-item-container">
                <div className="collection-image">
                  <div className="temp">Temp</div>
                </div>
                <div className="collection-text">
                  <p className="item-name">{item.name}</p>
                  <button className="item-details-button" onClick={() => setVisibleDetails(true)}>
                    Details
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>}
        {visibleDetails && <CollectionDetailsPage setVisibleDetails={setVisibleDetails}/>}
        <button className="change" onClick={handlePageToAccounts}>
            Go to Account Manager
        </button>
      </div>
    </main>
  );
}

export default CollectionPage;