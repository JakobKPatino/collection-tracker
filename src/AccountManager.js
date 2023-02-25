function AccountManager({setVisiblePage}) {

  function handleClick() {
    setVisiblePage('Test2');
  }

  return (
    <main className="account-manager">
      <button className="change" onClick={handleClick}>Go to Page 2</button>
    </main>
  );
}

export default AccountManager;