import styled from '@emotion/styled';
import React from 'react';
import { motion } from 'framer-motion';
import EthanGilmore from '../assets/ethan_gilmore.jpeg';
import GriffinWalker from '../assets/griffin_walker.jpg';
import EdwardStanford from '../assets/edward_stanford.jpeg';
import JacobMaynard from '../assets/jacob_maynard.jpeg';

const TeamSection = styled.section`
  padding: 4rem 4rem 12rem 4rem;
  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  margin-bottom: 2.5rem;
  background: linear-gradient(120deg, #fbca6a, #c75dc6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMemberCardDiv = styled(motion.div)`
  display: flex;
  gap: 2rem;
  flex-direction: ${(props) => (props.index % 2 === 0 ? 'row' : 'row-reverse')};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  flex: 0 0 350px;

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
  }
`;

const Content = styled.div`
  flex: 1;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    background: linear-gradient(120deg, #f876f9, #5dc3fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: #94a3b8;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 0.2rem;
  color: rgb(196, 207, 222);
  text-decoration: none;
  transition: color 0.2s ease;
  background: linear-gradient(120deg, #6366f1, #8b5cf6);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: linear-gradient(120deg, rgb(127, 129, 246), rgb(133, 93, 226));
    color: white;
  }
`;

const BioText = styled(motion.p)`
  color:rgb(158, 172, 191);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  overflow: hidden;
  text-align: left;
  white-space: pre-line;
`;

const ReadMoreButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(197, 118, 249, 0.85);
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
  margin-bottom: 1.5rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const teamMembers = [
  {
    name: 'Jacob Maynard',
    bio: `I’m a full-stack developer with a deep passion for web technologies, software development, and creating inclusive digital experiences. I’m currently pursuing a Bachelor’s degree in Computer Science at the University of Utah, and in Fall, I’ll be starting a Master’s program in Artificial Intelligence at St. Louis University. I believe AI-driven tools and applications are shaping the future of both the web and software, and I’m excited to be part of that evolution.

    My focus lies in building elegant, user-centered interfaces that seamlessly blend functionality with design. I enjoy the challenge of making complex ideas feel simple and intuitive, and I strive to make the web more accessible and responsive for all users. Whether it’s through performance optimization, accessibility improvements, or crafting clean, maintainable code, I’m always looking to push the boundaries of what I can create.

    Outside of my academic work and internship, I’m constantly working on personal projects to sharpen my skills as well as some music production. This summer, I plan to develop and publish my own NPM library, contributing to the open-source community while learning even more about package design and distribution.

    I also have a strong interest in data science and machine learning, especially when it comes to creating insightful and visually compelling data visualizations. I love finding ways to understand and tell stories through data, making the complex more understandable and engaging.

    Feel free to check out my github and portfolio to see what I’ve been working on!`,
    image: JacobMaynard,
    email: 'jacobamaynard@proton.me',
    linkedin: 'https://www.linkedin.com/in/jacob-maynard-283767230/',
    github: 'https://github.com/InfinityBowman/',
    personal: 'https://jacobmaynard.dev',
  },
  {
    name: 'Edward Stanford',
    bio: `My name is Edward Stanford, and I am currently pursuing a Bachelor of Science in Computer Science with a Minor in Mathematics. Throughout my academic journey, I have developed a strong interest in computer systems and programming languages, areas that challenge me to think critically about the underlying structure and logic of technology. I am also drawn to game development, especially the creative and technical balance it requires.

    As part of my senior capstone project, I am developing BeThere, a mobile application focused on photo sharing during social events. The app aims to make it easier for users to capture, organize, and share memories with friends in real-time. This project has allowed me to apply both my technical skills and creative problem-solving in a collaborative development setting, using technologies such as React Native and cloud-based services.

    Beyond academics, I enjoy reading and gaming—activities that not only help me unwind but also inspire new ideas and approaches to problem-solving. Whether I’m exploring the mechanics of a well-designed game or diving into a thought-provoking book, I find these interests complement my growth as a developer. I look forward to continuing to build meaningful software and exploring opportunities in systems programming and language design after graduation.`,
    image: EdwardStanford,
    email: 'edwardstanford7@gmail.com',
    linkedin: 'https://www.linkedin.com/in/edward-stanford747/',
    github: 'https://github.com/edwardstanford7',
  },
  {
    name: 'Ethan Gilmore',
    bio: `I'm jus a lil guy who enjoys his doggo!`,
    image: EthanGilmore,
    email: 'ethanmckgilmore@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ethangilmore/',
    github: 'https://github.com/ethangilmore',
  },
  {
    name: 'Griffin Walker',
    bio: `I'm jus a lil guy who enjoys skeleton gifs!`,
    image: GriffinWalker,
    email: 'grifwalker13@gmail.com',
    linkedin: 'https://www.linkedin.com/in/griffin-walker-a6972030a/',
    github: 'https://github.com/Gwalker1313',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const EmailWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const CopyButton = styled.button`
  background: transparent;
  border: none;
  color: currentColor;
  padding: 0.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const LinkSVG = () => (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
    />
  </svg>
);

const GitHubSVG = () => (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
      clipRule="evenodd"
    />
  </svg>
);

const CopySVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect
      x="9"
      y="9"
      width="13"
      height="13"
      rx="2"
      ry="2"
    ></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const TeamMemberCard = ({ member, index }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isCopied, setIsCopied] = React.useState(false);

  const bioPreviewLength = 250;
  const needsExpansion = member.bio.length > bioPreviewLength;

  const bioText = isExpanded ? member.bio : `${member.bio.slice(0, bioPreviewLength)}...`;

  return (
    <TeamMemberCardDiv
      key={member.name}
      index={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <ImageWrapper>
        <img
          src={member.image}
          alt={member.name}
        />
      </ImageWrapper>
      <Content>
        <h3>{member.name}</h3>
        <BioText
          initial={{ height: 'auto' }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          {bioText}
        </BioText>
        {needsExpansion && (
          <ReadMoreButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? 'Read Less ↑' : 'Read More ↓'}
          </ReadMoreButton>
        )}
        <SocialLinks>
          <SocialLink href={`mailto:${member.email}`}>
            <EmailWrapper>
              {member.email}
              <CopyButton
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(member.email);
                  setIsCopied(true);
                  setTimeout(() => {
                    setIsCopied(false);
                  }, 1000);
                }}
                title="Copy email"
              >
                {isCopied ? '✓' : <CopySVG />}
              </CopyButton>
            </EmailWrapper>
          </SocialLink>
          <SocialLink
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkSVG /> LinkedIn
          </SocialLink>
          <SocialLink
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubSVG /> GitHub
          </SocialLink>
          {member.personal && (
            <SocialLink
              href={member.personal}
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </SocialLink>
          )}
        </SocialLinks>
      </Content>
    </TeamMemberCardDiv>
  );
};

const OurTeam = () => {
  return (
    <TeamSection id="team">
      <Title>Our Team</Title>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={member.name}
            member={member}
            index={index}
          />
        ))}
      </TeamGrid>
    </TeamSection>
  );
};

export default OurTeam;
