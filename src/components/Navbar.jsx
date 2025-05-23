import styled from '@emotion/styled';
import React from 'react';

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  z-index: 10;
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 376px) {
    padding: 0 0.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }

  @media (max-width: 376px) {
    gap: 0.5rem;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const NavLink = styled.a`
  color: rgb(162, 176, 196);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <NavLinks>
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#tech">Tech Stack</NavLink>
        <NavLink href="#team">Our Team</NavLink>
        <NavLink href="#tutorial">Tutorial</NavLink>
      </NavLinks>
    </Container>
  );
};

export default Navbar;
