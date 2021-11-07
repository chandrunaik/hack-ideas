import Header from "./Header";
import HomeContent from "./HomeContent";
import { AppContext } from "../Contexts/AppContext";
import { useState } from "react";

function Home() {
  const [activeTab, setActiveTab] = useState("Home");
  const username = localStorage.getItem("username");
  const loggedIn = localStorage.getItem('loggedIn');

  return (
    <div>
      <AppContext.Provider value={{ activeTab, setActiveTab, loggedIn, username }}>
        <Header></Header>
        <HomeContent></HomeContent>
      </AppContext.Provider>
    </div>
  );
}

export default Home;
