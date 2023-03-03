function CollectionPage({setVisiblePage, currentProfile, handleToggleDropdown}) {

  function handleClick() {
    setVisiblePage('Account Manager');
  }

  function handleTemp() {
    console.log('clicked')
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
                        key={collection.id} onClick={handleTemp}>
                  {collection.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="collection-display-container">
          <button className="change" onClick={handleClick}>
            Go to Account Manager
          </button>
        </div>
      </div>
    </main>
  );
}

export default CollectionPage;