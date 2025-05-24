import React from 'react';
import styled from 'styled-components';
import img from './assets/profile.jpg';

const AboutContainer = styled.section`
  padding: 100px 0;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 15px;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  
  a {
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.secondary};
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.3s;
    }
    
    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

const TechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0 10px;
  padding: 0;
  margin: 20px 0 0;
  overflow: hidden;
  list-style: none;
  
  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
    
    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.secondary};
      font-size: ${({ theme }) => theme.fontSizes.md};
      line-height: 18px;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 300px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 50px auto 0;
  }
  
  &:hover .img-wrapper:after {
    background-color: transparent;
  }
`;

const StyledImage = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    filter: none;
    mix-blend-mode: normal;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    top: 0;
    left: 0;
    background-color: rgba(100, 255, 218, 0.3);
    z-index: 1;
    transition: ${({ theme }) => theme.transitions.default};
  }
  
  img {
    position: relative;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    z-index: 0;
  }
`;

const ImageBorder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  top: 15px;
  left: 15px;
  z-index: -1;
  transition: ${({ theme }) => theme.transitions.default};
  
  ${ImageWrapper}:hover & {
    transform: translate(-5px, -5px);
  }
`;

const CodeComment = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 20px;
  opacity: 0.7;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <div className="container">
        <CodeComment>{'// Sobre mim'}</CodeComment>
        <h2 className="section-heading">Sobre Mim</h2>
        <AboutContent>
          <AboutText>
            <p>
              Olá! Meu nome é Vanderson e sou apaixonado por criar coisas para a web. Meu interesse por desenvolvimento web começou em 2023 quando decidi explorar como os sites funcionavam — essa curiosidade me levou a uma jornada fascinante no mundo do desenvolvimento frontend.
            </p>
            <p>
              Hoje, tenho o privilégio de trabalhar em projetos que combinam design e código, criando interfaces que são tanto visualmente atraentes quanto funcionalmente eficientes. Meu foco está em construir produtos digitais acessíveis e com experiências de usuário excepcionais.
            </p>
            <p>
              Além do desenvolvimento web, também gosto de compartilhar conhecimento e aprender continuamente sobre novas tecnologias e tendências do mercado.
            </p>
            <p>Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:</p>
            <TechList>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Styled Components</li>
              <li>Next.js</li>
              <li>HTML5 & CSS3</li>
              <li>Git & GitHub</li>
            </TechList>
          </AboutText>
          <ImageWrapper>
            <StyledImage className="img-wrapper">
              <img src="./assets/profile.jpg" alt="Vanderson Alves de Lima" />
            </StyledImage>
            <ImageBorder />
          </ImageWrapper>
        </AboutContent>
      </div>
    </AboutContainer>
  );
};

export default About;
