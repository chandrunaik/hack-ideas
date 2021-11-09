/* eslint-disable react-hooks/exhaustive-deps */
import Header from './Header';
import HomeContent from './HomeContent';
import { AppContext } from '../Contexts/AppContext';
import { useState, useEffect } from 'react'; 
import {SORTBY, TABS} from './../constants';

const sortByRecents = (a, b) => {
  return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
};
const sortByLikes = (a, b) => {
  return a.likedBy.length > b.likedBy.length ? -1 : a.likedBy.length < b.likedBy.length ? 1 : 0;
};

function Home() {
  let storedChallenges = JSON.parse(localStorage.getItem('challenges')) || [];

  const username = localStorage.getItem('username');
  const loggedIn = localStorage.getItem('loggedIn');

  const [activeTab, setActiveTab] = useState(TABS.HOME);
  const [pristineChallenges, setPristineChallenges] = useState(storedChallenges);
  const [challenges, setChallenges] = useState([]);
  const [sortBy, setSortBy] = useState(SORTBY.NONE);

  const filterByUsername = (challenge) => {
    return challenge.createdBy === username;
  };

  const updateChallenges = (newChallenges) => {
    setPristineChallenges(() => newChallenges);
    localStorage.setItem('challenges', JSON.stringify(newChallenges));
  };

  const copyArray = (arr) => {
    return JSON.parse(JSON.stringify(arr));
  };

  useEffect(() => {
    let allChallenges;

    if (activeTab === TABS.HOME) {
      allChallenges = copyArray(pristineChallenges);
    } else {
      allChallenges = pristineChallenges.filter(filterByUsername);
    }

    if (sortBy === SORTBY.NONE) {
      setChallenges(() => allChallenges);
    } else {
      allChallenges.sort(sortBy === SORTBY.RECENTS ? sortByRecents : sortByLikes);
      setChallenges(() => allChallenges);
    }
  }, [activeTab, sortBy, pristineChallenges]);

  useEffect(() => {
    // reset sorting on tab change
    setSortBy(SORTBY.NONE);
  }, [activeTab]);

  return (
    <div className="d-flex flex-column flex-fill">
      <AppContext.Provider
        value={{
          activeTab,
          loggedIn,
          username,
          challenges,
          sortBy,
          setSortBy,
          setActiveTab,
          pristineChallenges,
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
