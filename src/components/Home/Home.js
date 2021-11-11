/* eslint-disable react-hooks/exhaustive-deps */
import {SORTBY, TABS} from './../../constants';
import {AppContext} from './../../Contexts/AppContext';
import {copyArray} from './../../utils';
import Header from './../common/Header';
import HomeContent from './HomeContent';

import React, {useState, useEffect} from 'react';

const sortByRecents = (a, b) => {
  return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
};
const sortByLikes = (a, b) => {
  return a.likedBy.length > b.likedBy.length ? -1 : a.likedBy.length < b.likedBy.length ? 1 : 0;
};

function Home() {
  const username = localStorage.getItem('username');
  const loggedIn = localStorage.getItem('loggedIn');

  const [activeTab, setActiveTab] = useState(TABS.HOME);
  const storedChallenges = JSON.parse(localStorage.getItem('challenges')) || [];

  const [challenges, setChallenges] = useState(storedChallenges);
  const [filteredChallenges, setFilteredChallenges] = useState([]);
  const [sortBy, setSortBy] = useState(SORTBY.NONE);

  const filterByUsername = (challenge) => {
    return challenge.createdBy === username;
  };

  const updateChallenges = (newChallenges) => {
    setChallenges(() => newChallenges);
    localStorage.setItem('challenges', JSON.stringify(newChallenges));
  };

  useEffect(() => {
    let allChallenges;

    if (activeTab === TABS.HOME) {
      allChallenges = copyArray(challenges);
    } else {
      allChallenges = challenges.filter(filterByUsername);
    }

    if (sortBy === SORTBY.NONE) {
      setFilteredChallenges(() => allChallenges);
    } else {
      allChallenges.sort(sortBy === SORTBY.RECENTS ? sortByRecents : sortByLikes);
      setFilteredChallenges(() => allChallenges);
    }
  }, [activeTab, sortBy, challenges]);

  useEffect(() => {
    // reset sortBy on tab change
    setSortBy(SORTBY.NONE);
  }, [activeTab]);

  return (
    <div className="d-flex flex-column flex-fill">
      <AppContext.Provider
        value={{
          activeTab,
          setActiveTab,
          loggedIn,
          username,
          sortBy,
          setSortBy,
          challenges,
          filteredChallenges,
          updateChallenges,
        }}
      >
        <Header></Header>
        <HomeContent></HomeContent>
      </AppContext.Provider>
    </div>
  );
}

export default Home;
