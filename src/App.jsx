import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import BeThereLogo from './assets/BeThere_Simple_Logo.png';
import feed from './assets/feed.webm';
import albums from './assets/albums.webm';
import camera from './assets/camera.webm';
import profile from './assets/profile.webm';
import map from './assets/map.webm';
import login from './assets/login.webm';
import TechSection from './components/TechSection.jsx';
import Feature from './components/Feature.jsx';
import Navbar from './components/Navbar.jsx';
import OurTeam from './components/OurTeam.jsx';
import TutorialSection from './components/TutorialSection.jsx';

const Container = styled.div`
  min-height: 100vh;
  background: #121212;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    filter: blur(140px);
    opacity: 0.15;
    z-index: 0;
  }

  &::before {
    background: rgb(174, 97, 255); /* Lilac color */
    top: 200px;
    left: -100px;
  }

  &::after {
    background: rgb(241, 85, 173); /* Pink color */
    top: 1200px;
    right: -200px;
  }
  background: radial-gradient(circle at 70% 10%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 30% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), #121212;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;
`;

const TitleContent = styled(motion.div)`
  text-align: center;
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  margin-bottom: 1.5rem;
  background: linear-gradient(120deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  color: rgb(198, 207, 221);
  margin-bottom: 4rem;
  line-height: 1.6;
`;

const Subtitle2 = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1rem);
  color: #94a3b8;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const LogoWrapper = styled(motion.div)`
  position: relative;
  width: 520px;
  height: 175px;
  margin: 4rem auto 10rem auto;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15), 0 4px 12px rgba(139, 92, 246, 0.1);
  border-radius: 50px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 320px;
    height: 107px;
    border-radius: 30px;
  }
`;

const Logo = styled(motion.img)`
  width: 100%;
  height: auto;
`;

const Sparkle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  animation: twinkle 1.5s infinite;
  z-index: 1;

  @keyframes twinkle {
    0%,
    100% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const FeatureSection = styled.div`
  position: relative;
`;

const GithubButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(120deg, #6366f1, #8b5cf6);
  color: white;
  padding: 0.6rem 1.1rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-2px);
  }
`;

const features = [
  {
    title: 'Intelligent Content Moderation',
    description:
      'Smart filtering and automated content classification keep your experience authentic and enjoyable with Amazon Rekognition.',
    gifSrc: null,
  },
  {
    title: 'Dynamic Photo Clustering',
    description:
      'Experience intelligent organization of your shared moments. Our advanced clustering algorithms work to effortlessly gather photos together.',
    gifSrc: map,
  },
  {
    title: 'Photo Feed',
    description:
      'A personalized, scrollable feed showcasing the photos you care about most. Stay updated with your friends and events in real-time.',
    gifSrc: feed,
  },
  {
    title: 'Camera',
    description:
      'A flexible camera with zoom, flash, privacy features, and more. Capture moments with ease and share them instantly.',
    gifSrc: camera,
  },
  {
    title: 'Automatic Album Creation',
    description:
      'Creates albums on the fly with our intelligent clustering algorithms. Photos are grouped into albums by time and location and given a unique location-based name to easily find later.',
    gifSrc: albums,
  },
  {
    title: 'Friends',
    description:
      'Connect with friends and family to share your experiences. Add friends, view their shared moments, and stay connected. Block and hide content from those you don’t want to see or be seen by.',
    gifSrc: profile,
  },
  {
    title: 'Profile Creation',
    description:
      'Create a profile to share your moments with friends and family. Customize your profile with a unique username and avatar. Secure login and account creation with Auth0.',
    gifSrc: login,
  },
];

const App = () => {
  const sparklePositions = [
    { top: '10%', left: '10%', delay: 0 },
    { top: '20%', right: '20%', delay: 0.3 },
    { top: '60%', left: '5%', delay: 0.7 },
    { bottom: '30%', right: '17%', delay: 0.5 },
    { bottom: '10%', left: '20%', delay: 0.2 },
    { bottom: '15%', left: '45%', delay: 0.4 },
    { top: '30%', right: '50%', delay: 0.8 },
  ];
  return (
    <Container>
      <Navbar />
      <HeroContent>
        <TitleContent
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6, margin: '50px 0px' }}
          transition={{ duration: 1 }}
        >
          <LogoWrapper
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.5 }}
          >
            {sparklePositions.map((pos, index) => (
              <Sparkle
                key={index}
                style={{
                  ...pos,
                  animationDelay: `${pos.delay}s`,
                }}
              />
            ))}
            <Logo
              src={BeThereLogo}
              alt="BeThere Logo"
            />
          </LogoWrapper>
          <Title
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Share Moments as They Happen
          </Title>
          <Subtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            BeThere lets you instantly share your experiences with friends and family. Capture life's precious moments
            in real-time.
          </Subtitle>
        </TitleContent>
        <FeatureSection id="features">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              videoSrc={feature.gifSrc}
              index={index}
            />
          ))}
        </FeatureSection>
        <TechSection />
        <OurTeam />
        <TutorialSection />
        <Subtitle2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Web presence created by Jacob Maynard.
        </Subtitle2>
        <GithubButton
          href="https://github.com/InfinityBowman/bethere-landing"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          View source code for this site -&gt;
        </GithubButton>
      </HeroContent>
    </Container>
  );
};

export default App;
