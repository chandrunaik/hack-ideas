import { AppContext } from "../Contexts/AppContext";
import {useContext} from  'react';
import {TABS} from './../constants'

function HomeTabs() {

  const {activeTab, setActiveTab}  = useContext(AppContext);

  return (
    <div className="homeTabs">
      <ul className="nav nav-tabs">
        <li className="nav-item" onClick={ () => {setActiveTab(TABS.HOME)}}>
          <span className={`nav-link ${activeTab === TABS.HOME ? 'active': ''}`}>Home</span>
        </li>
        <li className="nav-item" onClick={()=>{setActiveTab(TABS.MY_CHALLENGES)}}>
          <span className={`nav-link ${activeTab === TABS.MY_CHALLENGES ? 'active': ''}`}>My Submissions</span>
        </li>
      </ul>
    </div>
  );
}
export default HomeTabs;
