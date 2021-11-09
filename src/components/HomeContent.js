import { useState, useContext } from 'react';
import AddNewChallengeModal from './AddNewChallengeModal';
import ChallengesList from './ChallengesList';
import HomeTabs from './HomeTabs';
import { AppContext } from '../Contexts/AppContext';
import {SORTBY, TABS} from  './../constants'

function HomeContent() {
  const { activeTab, challenges, sortBy, setSortBy } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="homeContainer d-flex flex-fill flex-column">
      <HomeTabs></HomeTabs>
      <div className="d-flex justify-content-between mt-5">
        <h4>{activeTab === TABS.HOME ? TABS.HOME : TABS.MY_CHALLENGES}</h4>
        <button
          className="btn btn-success btn-sm"
          onClick={() => {
            setOpen(true);
          }}
        >
          + Add New Challenge
        </button>
      </div>
      <div className="d-flex align-items-end my-2">
        <div className="sortbyLabels">
          <span>SORT BY:</span>
          <span
            onClick={() => {
              setSortBy(sortBy === SORTBY.RECENTS ? SORTBY.NONE : SORTBY.RECENTS);
            }}
            className={`hsort mx-2 ${sortBy === SORTBY.RECENTS ? 'bold' : ''}`}
          >
            Most Recent
          </span>
          <span
            onClick={() => {
              setSortBy(sortBy  === SORTBY.LIKES? SORTBY.NONE : SORTBY.LIKES);
            }}
            className={`hsort ${sortBy === SORTBY.LIKES ? 'bold' : ''}`}
          >
            Most Liked
          </span>
        </div>
      </div>
      <ChallengesList challenges={challenges}></ChallengesList>
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
