import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 40px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterText = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 20px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const CodeComment = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 20px;
  opacity: 0.7;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterText>Desenvolvido com ❤️ por Vanderson Alves de Lima</FooterText>
          <FooterLinks>
            <FooterLink href="#about">Sobre</FooterLink>
            <FooterLink href="#skills">Competências</FooterLink>
            <FooterLink href="#projects">Projetos</FooterLink>
            <FooterLink href="#contact">Contato</FooterLink>
          </FooterLinks>
          <CodeComment>{'// © 2025 - Todos os direitos reservados'}</CodeComment>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

export default Footer;
