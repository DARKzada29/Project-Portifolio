import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
`;

const Greeting = styled.h1`
  margin: 0 0 20px 4px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(14px, 5vw, 16px);
  font-weight: 400;
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.white};
`;

const Subtitle = styled.h3`
  margin-top: 10px;
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Description = styled.p`
  margin: 20px 0 0;
  max-width: 540px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 50px;
  padding: 20px 28px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-5px);
  }
`;

const CodeLine = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 10px;
  opacity: 0.7;
`;

const Hero = () => {
  return (
    <HeroContainer id="home">
      <div className="container">
        <CodeLine>{'// Bem-vindo ao meu portfólio'}</CodeLine>
        <Greeting>Olá, meu nome é</Greeting>
        <Title>Vanderson Alves de Lima.</Title>
        <Subtitle>Desenvolvedor Frontend.</Subtitle>
        <Description>
          Sou um desenvolvedor especializado em criar experiências digitais excepcionais. 
          Atualmente, estou focado em construir produtos acessíveis e centrados no usuário, 
          com interfaces modernas e de alta performance.
        </Description>
        <CTAButton href="#projects">Conheça meus projetos</CTAButton>
      </div>
    </HeroContainer>
  );
};

export default Hero;
