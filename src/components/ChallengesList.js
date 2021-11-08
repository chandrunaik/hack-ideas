import ChallengesListItem from "./ChallengesListItem";
import ViewChallengeModal from "./ViewChallengeModal";
import { useState, useContext } from "react";
import noDataImg from "./../images/undraw_new_ideas_jdea.svg";
import { AppContext } from "../Contexts/AppContext";

function ChallengesList() {
  const [open, setOpen] = useState(false);
  const [challenge, setChallenge] = useState({});
  const { activeTab, username , challenges, storageEventHandler} = useContext(AppContext);

  let challengesArray;
  if (activeTab === "Home") {
    challengesArray = challenges;
  } else {
    challengesArray = challenges.filter((ch) => ch.createdBy === username);
  }

  const closeModal = () => {
    setOpen(false);
  };

  const challengeClicked = (challenge) => {
    setChallenge(challenge);
    setOpen(true);
  };

  const likedChallenge = (id) => {
    let allChallenges = challenges;

    let index = allChallenges.findIndex((ch) => ch.id === id);
    allChallenges[index].likedBy.push(username);

    localStorage.setItem("challenges", JSON.stringify(allChallenges));
    storageEventHandler()
  };

  const disLikedChallenge = (id) => {
    let allChallenges = challenges;
    let index = allChallenges.findIndex((ch) => ch.id === id);

    let likeIndex = allChallenges[index].likedBy.findIndex((u) => u === username);
    allChallenges[index].likedBy.splice(likeIndex, 1);

    localStorage.setItem("challenges", JSON.stringify(allChallenges));
    storageEventHandler();
  };

  if (!challengesArray.length) {
    return (
      <div className="d-flex align-items-center justify-content-center mt-5 flex-column">
        <img src={noDataImg} alt="" width="200" />
        <p className="mt-5">
          <strong>No challenges yet!</strong>
        </p>
        <p> Click on Add New Challenge to add the first challenge.</p>
      </div>
    );
  } else {
    return (
      <>
        <div className="ChallengesList mt-1">
          {challengesArray.map((challenge) => {
            return (
              <ChallengesListItem
                challenge={challenge}
                key={challenge.id}
                onClick={(challenge) => {
                  challengeClicked(challenge);
                }}
                onLike={(id) => {
                  likedChallenge(id);
                }}
                onDisLike={(id) => {
                  disLikedChallenge(id);
                }}
              ></ChallengesListItem>
            );
          })}
        </div>
        <ViewChallengeModal
          challenge={challenge}
          open={open}
          onclose={() => {
            closeModal();
          }}
        ></ViewChallengeModal>
      </>
    );
  }
}

export default ChallengesList;
