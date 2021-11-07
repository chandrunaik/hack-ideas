import { AppContext } from "../Contexts/AppContext";
import {useContext} from  'react';

function HomeTabs() {

  const {activeTab, setActiveTab}  = useContext(AppContext);

  return (
    <div className="homeTabs">
      <ul className="nav nav-tabs">
        <li className="nav-item" onClick={ () => {setActiveTab('Home')}}>
          <span className={`nav-link ${activeTab === 'Home' ? 'active': ''}`}>Home</span>
        </li>
        <li className="nav-item" onClick={()=>{setActiveTab('My Submissions')}}>
          <span className={`nav-link ${activeTab === 'My Submissions' ? 'active': ''}`}>My Submissions</span>
        </li>
      </ul>
    </div>
  );
}
export default HomeTabs;
