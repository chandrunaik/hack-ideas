import {AppContext} from './../../Contexts/AppContext';
import ViewChallengeModal from './../Modals/ViewChallengeModal';
import ChallengesListItem from './ChallengesListItem';
import NoChallengesBanner from './NoChallengesBanner';

import React, {useState, useEffect, useContext} from 'react';

function ChallengesList(props) {
  const [open, setOpen] = useState(false);
  const [challenge, setChallenge] = useState({});
  const [loading, setLoading] = useState(false);
  const {username, challenges, updateChallenges, activeTab, sortBy} = useContext(AppContext);

  const closeModal = () => {
    setOpen(false);
  };

  const handleChallengeClick = (challenge) => {
    setChallenge(challenge);
    setOpen(true);
  };

  const handleLike = (id) => {
    const updatedArray = challenges.map((challenge) => {
      if (challenge.id === id) {
        return {
          ...challenge,
          likedBy: [...challenge.likedBy, username],
        };
      } else {
        return challenge;
      }
    });
    updateChallenges(updatedArray);
  };

  const handleDisLike = (id) => {
    const updatedArray = challenges.map((challenge) => {
      if (challenge.id === id) {
        // remove disliked username from likes array
        const likedBy = challenge.likedBy.filter((u) => u !== username);
        return {
          ...challenge,
          likedBy,
        };
      } else {
        return challenge;
      }
    });
    updateChallenges(updatedArray);
  };

  // dummy spinner
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [activeTab, sortBy]);

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
                  handleChallengeClick(challenge);
                }}
                onLike={(id) => {
                  handleLike(id);
                }}
                onDisLike={(id) => {
                  handleDisLike(id);
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
