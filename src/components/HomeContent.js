import { useState, useContext } from "react";
import AddNewChallengeModal from "./AddNewChallengeModal";
import ChallengesList from "./ChallengesList";
import HomeTabs from "./HomeTabs";
import { AppContext } from "../Contexts/AppContext";

function HomeContent() {
  const { activeTab, username, challenges } = useContext(AppContext);
  const [sortBy, setSortBy] = useState("none");
  const [open, setOpen] = useState(false);

  let challengesArray = [];

  if (activeTab === "Home") {
    challengesArray = JSON.parse(JSON.stringify(challenges));
  } else {
    challengesArray = JSON.parse(JSON.stringify(challenges)).filter((ch) => ch.createdBy === username);
  }

  const sortByMostRecent = () => {
    if (sortBy === "recent") {
      challengesArray = JSON.parse(JSON.stringify(challenges));
    } else {
      challengesArray.sort((a, b) => {
        return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
      });
    }
    sortBy === "recent" ? setSortBy("none") : setSortBy("recent");
  };

  const sortByMostLiked = () => {
    if (sortBy === "likes") {
      challengesArray = JSON.parse(JSON.stringify(challenges));
    } else {
      challengesArray.sort((a, b) => {
        return a.likedBy.length < b.likedBy.length ? -1 : a.likedBy.length > b.likedBy.length ? 1 : 0;
      });
    }
    sortBy === "likes" ? setSortBy("none") : setSortBy("likes");
  };

  return (
    <div className="homeContainer d-flex flex-fill flex-column">
      <HomeTabs></HomeTabs>
      <div className="my-5">
        <h4>{activeTab === "Home" ? "Home" : "My Submissions"}</h4>
      </div>
      <div className="d-flex justify-content-between align-items-end my-2">
        <div className="sortbyLabels">
          <span>SORT BY:</span>
          <span onClick={sortByMostRecent} className={`'mx-2' ${sortBy === "recent" ? "bold" : ""}`}>
            Most Recent
          </span>
          <span onClick={sortByMostLiked} className={`${sortBy === "likes" ? "bold" : ""}`}>
            Most Liked
          </span>
        </div>
        <button
          className="btn btn-success btn-sm"
          onClick={() => {
            setOpen(true);
          }}
        >
          + Add New Challenge
        </button>
      </div>
      <ChallengesList challenges={challengesArray}></ChallengesList>
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
