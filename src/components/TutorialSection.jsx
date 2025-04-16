import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import albumsImage from '../assets//tutorial/albums.webp';
import mapImage from '../assets//tutorial/map.webp';
import cameraImage from '../assets//BeThere Midpoint_2.gif';
import permissionsGif from '../assets//tutorial/permissions.gif';
import feedGif from '../assets//tutorial/feed.gif';
import friendsGif from '../assets//tutorial/friends.gif';

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
  width: 260px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
  animation: none;
  -webkit-animation: none;

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
      'Download BeThere from Testflight and create your account using our Auth0 sign in. The app will ask for permissions to access your camera and location, and have you accept our Terms of Service and Privacy Policy. You will then be able to create your profile.',
    image: permissionsGif,
  },
  {
    number: '2.',
    title: 'Camera',
    description:
      'The app will open to the camera screen. You can take photos and save them to your camera roll without uploading anything. You can also click the lock after you take a photo to mark it as private. This will only allow your friends to see it. Uploading photos will automatically add them to an album or create a new one.',
    image: cameraImage,
  },
  {
    number: '3.',
    title: 'Connect with Friends',
    description:
      'Swipe to the right from the camera to get to your profile and click the friends icon in the top right to view your friend code and add your friends using their friend codes.',
    image: friendsGif,
  },
  {
    number: '4.',
    title: 'Browse Albums',
    description: `Swipe   to the left from the camera to get to the albums screen. This will show yours and other nearby photos along with the number of people and photos in the album and a unique location based album name.`,
    image: albumsImage,
  },
  {
    number: '5.',
    title: 'Open an Album',
    description:
      'Click on an album to open up the album to view all photos and see a map of the photo locations. You can click on a photo in the map or in the album to view it in full screen. When viewing a photo you will have options to like, save, share, report, or tap and click the dots in the top left to block the user who uploaded the photo.',
    image: mapImage,
  },
  {
    number: '6.',
    title: 'Photo Feed',
    description:
      'Swipe to the left again to see the photo feed. The photo feed is a scrollable feed of all photos from the albums you belong to. You can like, save, and share photos from the feed as well.',
    image: feedGif,
  },
];

const TutorialSection = () => {
  return (
    <TutorialContainer id="tutorial">
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 'some' }}
        transition={{ duration: 0.6 }}
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
            viewport={{ once: false, amount: 'some' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <StepContent>
              <StepTitle>{step.number} {step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepContent>
            {step.image && (
              <StepImage
                src={step.image}
                alt={step.title}
                loading="eager"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 'some' }}
                transition={{ duration: 0.6 }}
              />
            )}
          </Step>
        ))}
      </StepsContainer>
    </TutorialContainer>
  );
};

export default TutorialSection;
