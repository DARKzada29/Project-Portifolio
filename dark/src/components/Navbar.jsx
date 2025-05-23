import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  width: 100%;
  height: 70px;
  background-color: ${({ theme, scrolled }) => 
    scrolled ? 'rgba(10, 25, 47, 0.95)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => 
    scrolled ? 'blur(10px)' : 'none'};
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme, scrolled }) => 
    scrolled ? theme.shadows.small : 'none'};
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 25px;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
  
  span {
    display: inline-block;
    position: relative;
    transition: ${({ theme }) => theme.transitions.default};
    
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.a`
  padding: 10px;
  margin: 0 5px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
  }
  
  span {
    color: ${({ theme }) => theme.colors.secondary};
    margin-right: 5px;
  }
`;

const ResumeButton = styled.a`
  padding: 10px 16px;
  margin-left: 15px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  position: relative;
  z-index: 11;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HamburgerIcon = styled.div`
  position: relative;
  width: 30px;
  height: 2px;
  background-color: ${({ theme, isOpen }) => 
    isOpen ? 'transparent' : theme.colors.secondary};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: ${({ theme }) => theme.transitions.default};
  }
  
  &:before {
    transform: ${({ isOpen }) => 
      isOpen ? 'rotate(45deg)' : 'translateY(-8px)'};
  }
  
  &:after {
    transform: ${({ isOpen }) => 
      isOpen ? 'rotate(-45deg)' : 'translateY(8px)'};
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  width: 75vw;
  height: 100vh;
  padding: 100px 50px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: ${({ theme }) => theme.transitions.slow};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MobileNavLink = styled.a`
  display: block;
  padding: 15px 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-align: center;
  transition: ${({ theme }) => theme.transitions.default};
  
  span {
    display: block;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 5px;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const MobileResumeButton = styled(ResumeButton)`
  margin: 20px 0 0;
  padding: 15px 50px;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: ${({ theme }) => theme.transitions.default};
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Sobre', url: '#about' },
    { name: 'Competências', url: '#skills' },
    { name: 'Projetos', url: '#projects' },
    { name: 'Contato', url: '#contact' },
  ];

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavbarContent>
        <Logo href="/">
          <span>{'<VL />'}</span>
        </Logo>

        <NavLinks>
          {navLinks.map((link, i) => (
            <NavLink key={i} href={link.url}>
              <span>0{i + 1}.</span> {link.name}
            </NavLink>
          ))}
          <ResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Currículo
          </ResumeButton>
        </NavLinks>

        <HamburgerButton onClick={toggleMenu} aria-label="Menu">
          <HamburgerIcon isOpen={isMenuOpen} />
        </HamburgerButton>

        <MobileMenu isOpen={isMenuOpen}>
          {navLinks.map((link, i) => (
            <MobileNavLink key={i} href={link.url} onClick={closeMenu}>
              <span>0{i + 1}.</span>
              {link.name}
            </MobileNavLink>
          ))}
          <MobileResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Currículo
          </MobileResumeButton>
        </MobileMenu>

        <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
