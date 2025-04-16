import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const FeatureContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

const Content = styled(motion.div)`
  flex: 1;
  padding-right: 4rem;

  h2 {
    font-size: clamp(2.5rem, 8vw, 3rem);
    margin-bottom: 1.5rem;
    background: linear-gradient(120deg, #f876f9, #5dc3fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.2rem;
    color: rgb(174, 186, 202);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const GifWrapper = styled(motion.div)`
  border-radius: 16px;
  margin-right: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15), 0 4px 12px rgba(139, 92, 246, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${(props) => (props.isFeature ? '6rem' : 'auto')};
  max-width: 360px;

  @media (max-width: 768px) {
    margin-right: 0;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const FeatureVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  height: auto;
  border-radius: 16px;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const Feature = ({ title, description, videoSrc, index }) => {
  return (
    <FeatureContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.6, margin: '100px 0px' }}
      transition={{ duration: 0.8 }}
    >
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
      {videoSrc && (
        <GifWrapper
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.6, margin: '100px 0px' }}
          transition={{
            duration: 1.2,
            type: 'spring',
            stiffness: 50,
          }}
        >
          <FeatureVideo
            autoPlay
            loop
            muted
            playsInline
            src={videoSrc}
          />
        </GifWrapper>
      )}
    </FeatureContainer>
  );
};

export default Feature;
