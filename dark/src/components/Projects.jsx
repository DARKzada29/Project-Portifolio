import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 100px 0;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  position: relative;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: ${({ theme }) => theme.transitions.default};
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    
    .project-image {
      transform: scale(1.05);
    }
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 60%;
  overflow: hidden;
`;

const ProjectImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(10, 25, 47, 0.5);
    z-index: 1;
  }
`;

const ProjectContent = styled.div`
  padding: 25px;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 20px;
`;

const ProjectTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const ProjectTechTag = styled.li`
  padding: 5px 10px;
  background-color: rgba(100, 255, 218, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondary};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ProjectFilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ProjectFilterButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ active, theme }) => 
    active ? theme.colors.secondary : 'transparent'};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ active, theme }) => 
      active ? theme.colors.secondary : 'rgba(100, 255, 218, 0.1)'};
  }
`;

const CodeComment = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 20px;
  opacity: 0.7;
`;

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projectsData = [
    {
      title: 'E-commerce Responsivo',
      description: 'Plataforma de comércio eletrônico completa com carrinho de compras, sistema de pagamento e painel administrativo.',
      image: '/project1.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/vandersonlima/ecommerce',
      demo: 'https://ecommerce-demo.vandersonlima.com',
      category: 'fullstack'
    },
    {
      title: 'Dashboard Analítico',
      description: 'Painel de controle interativo para visualização de dados com gráficos e relatórios personalizáveis.',
      image: '/project2.jpg',
      tech: ['React', 'D3.js', 'Firebase', 'Material UI'],
      github: 'https://github.com/vandersonlima/dashboard',
      demo: 'https://dashboard-demo.vandersonlima.com',
      category: 'frontend'
    },
    {
      title: 'App de Gestão de Tarefas',
      description: 'Aplicativo para gerenciamento de tarefas com recursos de arrastar e soltar, notificações e sincronização em nuvem.',
      image: '/project3.jpg',
      tech: ['React', 'Redux', 'Firebase', 'Styled Components'],
      github: 'https://github.com/vandersonlima/taskmanager',
      demo: 'https://taskmanager-demo.vandersonlima.com',
      category: 'frontend'
    },
    {
      title: 'Site de Portfólio para Fotógrafo',
      description: 'Website responsivo para exibição de trabalhos fotográficos com galeria de imagens e sistema de contato.',
      image: '/project4.jpg',
      tech: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      github: 'https://github.com/vandersonlima/photography',
      demo: 'https://photography-demo.vandersonlima.com',
      category: 'frontend'
    },
    {
      title: 'API RESTful',
      description: 'API completa para gerenciamento de usuários e produtos com autenticação JWT e documentação Swagger.',
      image: '/project5.jpg',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/vandersonlima/api',
      demo: 'https://api-docs.vandersonlima.com',
      category: 'backend'
    },
    {
      title: 'Aplicativo de Clima',
      description: 'Aplicativo de previsão do tempo com geolocalização e visualização de dados meteorológicos em tempo real.',
      image: '/project6.jpg',
      tech: ['React', 'OpenWeather API', 'Geolocation API', 'CSS Modules'],
      github: 'https://github.com/vandersonlima/weatherapp',
      demo: 'https://weather-demo.vandersonlima.com',
      category: 'frontend'
    }
  ];
  
  const filters = [
    { value: 'all', label: 'Todos' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <ProjectsContainer id="projects">
      <div className="container">
        <CodeComment>{'// Meus projetos'}</CodeComment>
        <h2 className="section-heading">Projetos</h2>
        
        <ProjectFilterContainer>
          {filters.map((filterItem, index) => (
            <ProjectFilterButton
              key={index}
              active={filter === filterItem.value}
              onClick={() => setFilter(filterItem.value)}
            >
              {filterItem.label}
            </ProjectFilterButton>
          ))}
        </ProjectFilterContainer>
        
        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImageContainer>
                <ProjectImage className="project-image" src={project.image} />
              </ProjectImageContainer>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTechList>
                  {project.tech.map((tech, techIndex) => (
                    <ProjectTechTag key={techIndex}>{tech}</ProjectTechTag>
                  ))}
                </ProjectTechList>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </ProjectLink>
                  <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                    <i className="fas fa-external-link-alt"></i>
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
