function Test2({setVisiblePage}) {

  function handleClick() {
    setVisiblePage('AccountManager');
  }

  return (
    <main>
      <button className="change" onClick={handleClick}>Go to Page 1</button>
    </main>
  );
}

export default Test2;