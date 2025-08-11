import React from "react";
import Hero from "../components/home/Hero";
import AboutMe from "../components/home/AboutMe";
import MySkills from "../components/home/MySkills";
import RecentProjects from "../components/home/RecentProjects";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <MySkills />
      <RecentProjects />
    </div>
  );
};

export default Home;
