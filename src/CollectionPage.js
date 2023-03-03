function CollectionPage({setVisiblePage, currentProfile}) {

  function handleClick() {
    setVisiblePage('Account Manager');
  }

  return (
    <main className="collection-page">
      <div className="collection-page-container">
        <div className="collection-dropdown-container">
          <p>{currentProfile.profileName}</p>
        </div>
        <div className="collection-display-container">
          <button className="change" onClick={handleClick}>Go to Account Manager</button>
        </div>
      </div>
    </main>
  );
}

export default CollectionPage;