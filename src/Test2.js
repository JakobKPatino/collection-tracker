function Test2({setVisiblePage}) {

  function handleClick() {
    setVisiblePage('Test1');
  }

  return (
    <main id="test2">
      <button className="change" onClick={handleClick}>Go to Page 1</button>
    </main>
  );
}

export default Test2;