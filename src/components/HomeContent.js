import AddNewChallengeModal from "./AddNewChallengeModal";
import ChallengesList from "./ChallengesList";
import HomeTabs from "./HomeTabs";
import { useState, useContext } from "react";
import { AppContext } from "../Contexts/AppContext";

function HomeContent() {
  const { activeTab } = useContext(AppContext);

  const [open, setOpen] = useState(false);

  const addNewChallenge = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const sortByMostRecent = () => {};

  const sortByMostLiked = () => {};

  let heading = "All Challenges";

  if (activeTab === "My Submissions") {
    heading = "My Challenges";
  }
  return (
    <div className="homeContainer">
      <HomeTabs></HomeTabs>
      <div className="my-3">
        <h5>{heading}</h5>
      </div>
      <div className="d-flex justify-content-between align-items-center my-1">
        <div className="sortbyLabels">
          <strong>Sort By:</strong> <span onClick={sortByMostRecent}>Most Recent</span>{" "}
          <span onClick={sortByMostLiked}>Most Liked</span>
        </div>
        <button className="btn btn-primary btn-sm" onClick={addNewChallenge}>
          + Add New Challenge
        </button>
      </div>
      <ChallengesList></ChallengesList>
      <AddNewChallengeModal
        open={open}
        onclose={() => {
          closeModal();
        }}
      ></AddNewChallengeModal>
    </div>
  );
}
export default HomeContent;
