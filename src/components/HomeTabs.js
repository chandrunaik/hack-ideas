import {TABS} from './../constants';

import {AppContext} from '../Contexts/AppContext';

import React, {useContext} from 'react';

function HomeTabs() {
  const {activeTab, setActiveTab} = useContext(AppContext);

  return (
    <div className="homeTabs">
      <ul className="nav nav-tabs">
        <li
          className="nav-item"
          onClick={() => {
            setActiveTab(TABS.HOME);
          }}
        >
          <span className={`nav-link ${activeTab === TABS.HOME ? 'active' : ''}`}>{TABS.HOME}</span>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            setActiveTab(TABS.MY_CHALLENGES);
          }}
        >
          <span className={`nav-link ${activeTab === TABS.MY_CHALLENGES ? 'active' : ''}`}>{TABS.MY_CHALLENGES}</span>
        </li>
      </ul>
    </div>
  );
}
export default HomeTabs;
