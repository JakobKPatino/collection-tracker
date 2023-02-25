import { useState } from "react";
import Test1 from "./AccountManager";
import Test2 from "./Test2";

function Body() {

  const [visiblePage, setVisiblePage] = useState('AccountManager');

  return (
    <main>
      {visiblePage === 'AccountManager' && <Test1 setVisiblePage={setVisiblePage}/>}
      {visiblePage === 'Test2' && <Test2 setVisiblePage={setVisiblePage}/>}
    </main>
  );
}

export default Body;