import styled from '@emotion/styled';
import React from 'react';

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  z-index: 10;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #94a3b8;
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
        {/* <NavLink href="#team">Our Team</NavLink> */}
      </NavLinks>
    </Container>
  );
};

export default Navbar;
