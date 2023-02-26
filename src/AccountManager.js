function AccountManager({setVisiblePage}) {

  function handleClick() {
    setVisiblePage('Test2');
  }

  return (
    <main className="account-manager">
      <div className="account-options">
        <div className="new-account">
          <h1>Create a new profile</h1>
        </div>
        <div className="existing-account">
          <button className="change" onClick={handleClick}>Select existing profile</button>
        </div>
      </div>
    </main>
  );
}

export default AccountManager;