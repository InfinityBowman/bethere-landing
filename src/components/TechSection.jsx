import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  margin-bottom: 1.5rem;
  background: linear-gradient(120deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TechSectionDiv = styled.div`
  margin: 4rem auto;
  max-width: 800px;
  text-align: center;
`;

const TechGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TechItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #8b5cf6;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  p {
    color: #94a3b8;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 1.1 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: 'spring',
      stiffness: 50,
    },
  },
};

const TechSection = () => {
  return (
    <TechSectionDiv id="tech">
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
      >
        Technologies Used
      </Title>
      <TechGrid
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <TechItem variants={itemVariants}>
          <h3>React Native</h3>
          <p>Cross-platform mobile development framework for iOS and Android using Expo</p>
        </TechItem>
        <TechItem variants={itemVariants}>
          <h3>AWS</h3>
          <p>S3 Bucket image storage, RDS PostgreSQL, EC2 web server</p>
        </TechItem>
        <TechItem variants={itemVariants}>
          <h3>.NET</h3>
          <p>Web server and Rest API written with .NET</p>
        </TechItem>
        <TechItem variants={itemVariants}>
          <h3>Auth0</h3>
          <p>Secure accounts and authentication with Auth0</p>
        </TechItem>
        <TechItem variants={itemVariants}>
          <h3>React</h3>
          <p>Developer tools web dashboard for testing</p>
        </TechItem>
        <TechItem variants={itemVariants}>
          <h3>Figma</h3>
          <p>Advanced prototyping and mockups</p>
        </TechItem>
      </TechGrid>
    </TechSectionDiv>
  );
};

export default TechSection;
