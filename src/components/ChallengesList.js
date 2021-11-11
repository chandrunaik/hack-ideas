import {copyArray} from './../utils';
import ChallengesListItem from './ChallengesListItem';
import NoChallengesBanner from './NoChallengesBanner';
import ViewChallengeModal from './ViewChallengeModal';

import {AppContext} from '../Contexts/AppContext';

import React, {useState, useEffect, useContext} from 'react';

function ChallengesList(props) {
  const [open, setOpen] = useState(false);
  const [challenge, setChallenge] = useState({});
  const [loading, setLoading] = useState(false);
  const {username, challenges, updateChallenges, activeTab, sortBy} = useContext(AppContext);

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

  // dummy spinner
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [challenges, activeTab, sortBy]);

  if (loading) {
    return (
      <div className="d-flex flex-fill align-items-center justify-content-center">
        <div className="spinner-border text-secondary" role="status"></div>
      </div>
    );
  }

  if (!props.challenges.length) {
    return <NoChallengesBanner></NoChallengesBanner>;
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
