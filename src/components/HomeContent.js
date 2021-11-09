import { useState, useContext } from 'react';
import AddNewChallengeModal from './AddNewChallengeModal';
import ChallengesList from './ChallengesList';
import HomeTabs from './HomeTabs';
import { AppContext } from '../Contexts/AppContext';

function HomeContent() {
  const { activeTab, challenges, sortBy, setSortBy } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="homeContainer d-flex flex-fill flex-column">
      <HomeTabs></HomeTabs>
      <div className="d-flex justify-content-between mt-5">
        <h4>{activeTab === 'Home' ? 'Home' : 'My Submissions'}</h4>
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
              setSortBy(sortBy === 'recents' ? 'none' : 'recents');
            }}
            className={`hsort mx-2 ${sortBy === 'recents' ? 'bold' : ''}`}
          >
            Most Recent
          </span>
          <span
            onClick={() => {
              setSortBy(sortBy  === 'likes'? 'none' : 'likes');
            }}
            className={`hsort ${sortBy === 'likes' ? 'bold' : ''}`}
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
