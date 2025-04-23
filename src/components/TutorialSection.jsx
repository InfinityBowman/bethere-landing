import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import albumsImage from '../assets//tutorial/albums.webp';
import mapImage from '../assets//tutorial/map.webp';
import camera from '../assets//camera.webm';
import permissions from '../assets//tutorial/permissions.webm';
import feed from '../assets//tutorial/feed.webm';
import friends from '../assets//tutorial/friends.webm';

const TutorialContainer = styled.section`
  padding: 8rem 4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  margin-bottom: 2.5rem;
  background: linear-gradient(120deg, #fbca6a, #c75dc6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Step = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-direction: ${(props) => (props.index % 2 === 0 ? 'row' : 'row-reverse')};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const StepMedia = styled(motion.div)`
  width: 260px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const StepVideo = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  display: block;
  object-fit: cover;
  transform: translateZ(0); // Force hardware acceleration
  -webkit-transform: translateZ(0);
  background-color: #1a1a1a; // Dark background while loading

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StepContent = styled.div`
  flex: 1;
  text-align: left;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StepImage = styled(motion.img)`
  width: 100%;
  max-width: 260px;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
  animation: none;
  -webkit-animation: none;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);

  &[src$='.gif'] {
    image-rendering: auto;
    -webkit-transform: translate3d(0, 0, 0);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, #f876f9, #5dc3fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StepDescription = styled.p`
  color: rgb(174, 186, 202);
  line-height: 1.6;
  font-size: 1.1rem;
`;

const steps = [
  {
    number: '1.',
    title: 'Create Your Account',
    description:
      'Download and install BeThere from Testflight and create your account using our Auth0 sign in. The app will ask for permissions to access your camera and location, and have you accept our Terms of Service and Privacy Policy. You will then be able to create your profile.',
    image: permissions,
    type: 'video',
  },
  {
    number: '2.',
    title: 'Take Photos',
    description:
      'The app will open to the camera screen. You can take photos and save them to your camera roll without uploading anything. You can also click the lock after you take a photo to mark it as private. This will only allow your friends to see it. Uploading photos will automatically add them to an album or create a new one. Before photos are shared publicly they are scanned for inappropriate content and may potentially be blocked, the same is true for profile photos.',
    image: camera,
    type: 'video',
  },
  {
    number: '3.',
    title: 'Connect with Friends',
    description:
      'Swipe to the right from the camera to get to your profile and click the friends icon in the top right to view your friend code and add your friends using their friend codes. You can also view blocked users and change blocked content settings.',
    image: friends,
    type: 'video',
  },
  {
    number: '4.',
    title: 'Browse Albums',
    description: `Swipe to the left from the camera to get to the albums screen. This will show yours and other nearby photos along with the number of people and photos in the album and a unique location based album name.`,
    image: albumsImage,
    type: 'image',
  },
  {
    number: '5.',
    title: 'Open an Album',
    description:
      'Click on an album to open up the album to view all photos and see a map of the photo locations. You can click on a photo in the map or in the album to view it in full screen. When viewing a photo you will have options to like, save, share, report, or tap and click the dots in the top left to block the user who uploaded the photo.',
    image: mapImage,
    type: 'image',
  },
  {
    number: '6.',
    title: 'Photo Feed',
    description:
      'Swipe to the left again to see the photo feed. The photo feed is a scrollable feed of all photos from the albums you belong to. You can like, save, and share photos from the feed as well as navigate to the album a photo was taken in using the three dots menu when clicking on a photo.',
    image: feed,
    type: 'video',
  },
];

const TutorialSection = ({ animationTiming }) => {
  return (
    <TutorialContainer id="tutorial">
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: animationTiming.amount }}
        transition={{ duration: animationTiming.duration }}
      >
        How to Use BeThere
      </Title>
      <StepsContainer>
        {steps.map((step, index) => (
          <Step
            key={step.number}
            index={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: animationTiming.amount }}
            transition={{ duration: animationTiming.duration, delay: index * 0.1 }}
          >
            <StepContent>
              <StepTitle>
                {step.number} {step.title}
              </StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepContent>
            {step.image && (
              <StepMedia
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: animationTiming.amount }}
                transition={{ duration: animationTiming.duration }}
              >
                {step.type === 'video' ? (
                  <StepVideo
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    src={step.image}
                  />
                ) : (
                  <StepImage
                    src={step.image}
                    alt={step.title}
                    loading="eager"
                  />
                )}
              </StepMedia>
            )}
          </Step>
        ))}
      </StepsContainer>
    </TutorialContainer>
  );
};

export default TutorialSection;
