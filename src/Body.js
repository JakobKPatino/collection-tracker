import { useState } from "react";
import AccountManager from "./AccountManager";
import Test2 from "./Test2";

function Body({profiles, handleProfileSelection, handleToggleDropdown}) {

  const [visiblePage, setVisiblePage] = useState('AccountManager');

  return (
    <main>
      {visiblePage === 'AccountManager' && <AccountManager setVisiblePage={setVisiblePage} profiles={profiles} 
      handleProfileSelection={handleProfileSelection} handleToggleDropdown={handleToggleDropdown}/>}
      {visiblePage === 'Test2' && <Test2 setVisiblePage={setVisiblePage}/>}
    </main>
  );
}

export default Body;