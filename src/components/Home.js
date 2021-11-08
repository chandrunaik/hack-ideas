import Header from "./Header";
import HomeContent from "./HomeContent";
import { AppContext } from "../Contexts/AppContext";
import { useState,useEffect } from "react";

function Home() {
  const [activeTab, setActiveTab] = useState("Home");
  const username = localStorage.getItem("username");
  const loggedIn = localStorage.getItem('loggedIn');
  const [challenges, setChallenges] = useState([]);

  const storageEventHandler = () => {
    setChallenges(JSON.parse(localStorage.getItem("challenges")) || []);
  }

  useEffect(() => {
    storageEventHandler();
  }, []);

  return (
    <div className="d-flex flex-column flex-fill">
      <AppContext.Provider value={{ activeTab, setActiveTab, loggedIn, username, challenges, storageEventHandler }}>
        <Header></Header>
        <HomeContent></HomeContent>
      </AppContext.Provider>
    </div>
  );
}

export default Home;
