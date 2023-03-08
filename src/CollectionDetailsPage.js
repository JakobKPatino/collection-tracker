function CollectionDetailsPage({handleWindowBack, currentItem}) {

  function handleDeleteItem() {
    console.log('delete');
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