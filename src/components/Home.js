/* eslint-disable react-hooks/exhaustive-deps */
import Header from './Header';
import HomeContent from './HomeContent';
import { AppContext } from '../Contexts/AppContext';
import { useState, useEffect } from 'react';

let pristineChallenges = [];

const sortByRecents = (a, b) => {
  return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
};
const sortByLikes = (a, b) => {
  return a.likedBy.length > b.likedBy.length ? -1 : a.likedBy.length < b.likedBy.length ? 1 : 0;
};

function Home() {
  const [activeTab, setActiveTab] = useState('Home');
  const username = localStorage.getItem('username');
  const loggedIn = localStorage.getItem('loggedIn');
  const [challenges, setChallenges] = useState([]);
  const [sortBy, setSortBy] = useState('none');

  const filterByUsername = (challenge) => {
    return challenge.createdBy === username;
  };

  const getPristineChallenges = () => {
    let challenges = localStorage.getItem('challenges');
    pristineChallenges = JSON.parse(challenges) || [];
  };

  const setPristineChallenges = (newChallenges) => {
    pristineChallenges = newChallenges;
    localStorage.setItem('challenges', JSON.stringify(newChallenges));
  };

  const copyArray = (arr) => {
    return JSON.parse(JSON.stringify(arr));
  };

  useEffect(() => {
    getPristineChallenges();
  }, []);

  useEffect(() => {
    if (activeTab === 'Home' && sortBy === 'none') {
      let allChallenges = copyArray(pristineChallenges);
      
      setChallenges(() => allChallenges);
    } else if (activeTab === 'My Submissions' && sortBy === 'none') {
      let myChallenges = pristineChallenges.filter(filterByUsername);
      
      setChallenges(() => myChallenges);
    } else {
      let activeChallenges = copyArray(challenges);
     
      activeChallenges.sort(sortBy === 'recents' ? sortByRecents : sortByLikes);

      setChallenges(() => {
        return activeChallenges;
      });
    }
  }, [activeTab, sortBy]);

  useEffect(() => {
    // reset sorting on tab change
    setSortBy('none');
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
          setPristineChallenges,
        }}
      >
        <Header></Header>
        <HomeContent></HomeContent>
      </AppContext.Provider>
    </div>
  );
}

export default Home;
