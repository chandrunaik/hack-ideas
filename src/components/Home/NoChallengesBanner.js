import noDataImg from './../../assets/images/undraw_new_ideas_jdea.svg';

import React from 'react';

function NoChallengesBanner() {
  return (
    <div className="d-flex flex-fill align-items-center justify-content-center flex-column NoChallengesBanner">
      <img src={noDataImg} alt="No Challenges" width="150" className="mb-3" />
      <p>No challenges yet!</p>
      <p>Click on add new challenge to add your first challenge.</p>
    </div>
  );
}

export default NoChallengesBanner;
