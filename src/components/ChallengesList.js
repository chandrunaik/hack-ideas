import noDataImg from './../assets/images/undraw_new_ideas_jdea.svg';
import {copyArray} from './../utils';
import ChallengesListItem from './ChallengesListItem';
import ViewChallengeModal from './ViewChallengeModal';

import {AppContext} from '../Contexts/AppContext';

import React, {useState, useContext} from 'react';

function ChallengesList(props) {
  const [open, setOpen] = useState(false);
  const [challenge, setChallenge] = useState({});
  const {username, challenges, updateChallenges} = useContext(AppContext);

  const closeModal = () => {
    setOpen(false);
  };

  const challengeClicked = (challenge) => {
    setChallenge(challenge);
    setOpen(true);
  };

  const likedChallenge = (id) => {
    const allChallenges = copyArray(challenges);
    const index = allChallenges.findIndex((ch) => ch.id === id);

    allChallenges[index].likedBy.push(username);
    updateChallenges(allChallenges);
  };

  const disLikedChallenge = (id) => {
    const allChallenges = copyArray(challenges);
    const index = allChallenges.findIndex((ch) => ch.id === id);
    const likeIndex = allChallenges[index].likedBy.findIndex((u) => u === username);

    allChallenges[index].likedBy.splice(likeIndex, 1);
    updateChallenges(allChallenges);
  };

  if (!props.challenges.length) {
    return (
      <div className="d-flex flex-fill align-items-center justify-content-center mt-5 flex-column">
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
          {props.challenges.map((challenge) => {
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
