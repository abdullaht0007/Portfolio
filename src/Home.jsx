import React from "react";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import FixSocialIcon from "./SocialIcon/FixSocialIcon";
import ScrollToTop from "./SocialIcon/ScrollToTop";

function Home() {
  return (
    <>
      <Hero />
      <Projects/>
      <Contact />
      <FixSocialIcon />
      <ScrollToTop />
    </>
  );
}

export default Home;
