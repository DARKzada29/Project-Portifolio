import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 100px 0;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  position: relative;
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.secondary}, transparent);
    border-radius: ${({ theme }) => theme.borderRadius.medium} ${({ theme }) => theme.borderRadius.medium} 0 0;
  }
`;

const SkillIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const SkillTitle = styled.h3`
  margin-bottom: 15px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
`;

const SkillDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const SkillTag = styled.li`
  padding: 5px 10px;
  background-color: rgba(100, 255, 218, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondary};
`;

const CodeComment = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 20px;
  opacity: 0.7;
`;

const Skills = () => {
  const skillsData = [
    {
      title: 'Desenvolvimento Frontend',
      description: 'Criação de interfaces modernas, responsivas e de alta performance, com foco na experiência do usuário.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Styled Components'],
      icon: '💻'
    },
    {
      title: 'UI/UX Design',
      description: 'Design de interfaces intuitivas e atraentes, com foco na usabilidade e acessibilidade.',
      tags: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'Design System'],
      icon: '🎨'
    },
    {
      title: 'Desenvolvimento Responsivo',
      description: 'Criação de layouts que se adaptam perfeitamente a diferentes tamanhos de tela e dispositivos.',
      tags: ['Mobile First', 'Media Queries', 'Flexbox', 'Grid', 'Bootstrap'],
      icon: '📱'
    },
    {
      title: 'Otimização de Performance',
      description: 'Implementação de técnicas para melhorar a velocidade e eficiência de aplicações web.',
      tags: ['Lazy Loading', 'Code Splitting', 'Bundle Optimization', 'Caching', 'SEO'],
      icon: '⚡'
    },
    {
      title: 'Controle de Versão',
      description: 'Gerenciamento eficiente de código-fonte e colaboração em equipe.',
      tags: ['Git', 'GitHub', 'GitLab', 'Conventional Commits', 'CI/CD'],
      icon: '🔄'
    },
    {
      title: 'Frameworks & Bibliotecas',
      description: 'Utilização de ferramentas modernas para desenvolvimento web eficiente.',
      tags: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript'],
      icon: '🛠️'
    }
  ];

  return (
    <SkillsContainer id="skills">
      <div className="container">
        <CodeComment>{'// Minhas competências'}</CodeComment>
        <h2 className="section-heading">Competências</h2>
        <SkillsGrid>
          {skillsData.map((skill, index) => (
            <SkillCard key={index}>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
              <SkillsList>
                {skill.tags.map((tag, tagIndex) => (
                  <SkillTag key={tagIndex}>{tag}</SkillTag>
                ))}
              </SkillsList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </div>
    </SkillsContainer>
  );
};

export default Skills;
