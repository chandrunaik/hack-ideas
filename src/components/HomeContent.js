import {TABS} from './../constants';
import AddNewChallengeModal from './AddNewChallengeModal';
import ChallengesList from './ChallengesList';
import HomeTabs from './HomeTabs';
import Sorting from './Sorting';

import {AppContext} from '../Contexts/AppContext';

import React, {useState, useContext} from 'react';

function HomeContent() {
  const {activeTab, filteredChallenges} = useContext(AppContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="homeContainer d-flex flex-fill flex-column">
      <HomeTabs></HomeTabs>
      <div className="d-flex justify-content-between my-5 align-items-center">
        <h4 className="heading m-0">{activeTab === TABS.HOME ? 'All Challenges' : 'My Challenges'}</h4>
        <button
          className="btn btn-success btn-sm"
          onClick={() => {
            setOpen(true);
          }}
        >
          + Add New Challenge
        </button>
      </div>
      <Sorting></Sorting>
      <ChallengesList challenges={filteredChallenges}></ChallengesList>
      <AddNewChallengeModal
        open={open}
        onclose={() => {
          setOpen(false);
        }}
      ></AddNewChallengeModal>
    </div>
  );
}
export default HomeContent;
