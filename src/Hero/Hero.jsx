import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
 
        <HeroWrapper>
          <HeroLeft>
            <h1>Not fully developed yet</h1>
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I\'m Abdullah Tassawar.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'A Full-Stack Developer.',
                    1000,
                    'A problem solver.',
                    1000,
                    'An innovative thinker.',
                    1000,
                    () => setShowScrollDown(true),
              
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }

          </HeroLeft>
          <HeroRight>
              <Image
                src=""
                alt=""
              />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects" id="scrollDown">
          <ScrollLink>
            Scroll down
            <img
              src="./scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
