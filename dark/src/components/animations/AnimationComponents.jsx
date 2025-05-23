import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Componente para animação de código digitando
const TypedCode = styled(motion.div)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 20px;
  opacity: 0.8;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
`;

// Componente para animação de fade-in
const FadeInContainer = styled(motion.div)`
  width: 100%;
`;

// Componente para animação de elementos flutuantes
const FloatingElement = styled(motion.div)`
  position: absolute;
  opacity: 0.1;
  z-index: -1;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  user-select: none;
`;

// Variantes para animações
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const typingVariant = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};

// Componente de código digitando
export const CodeTyping = ({ text, delay = 0 }) => {
  return (
    <TypedCode
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={typingVariant}
      custom={text.length}
      transition={{ delay }}
    >
      {text}
    </TypedCode>
  );
};

// Componente de fade-in
export const FadeIn = ({ children, direction = "up", delay = 0, ...props }) => {
  let variants;
  
  switch (direction) {
    case "left":
      variants = fadeInLeft;
      break;
    case "right":
      variants = fadeInRight;
      break;
    default:
      variants = fadeInUp;
  }
  
  return (
    <FadeInContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      transition={{ delay }}
      {...props}
    >
      {children}
    </FadeInContainer>
  );
};

// Componente de elementos flutuantes (símbolos de código)
export const CodeElements = () => {
  const codeSymbols = [
    '{ }', '[ ]', '( )', '</ >', '=>', '&&', '||', '++', '!=', '==', '===', '?:', '/*', '*/', '//', '...', 
    'const', 'let', 'function', 'return', 'import', 'export', 'class', 'extends', 'async', 'await'
  ];
  
  return (
    <>
      {codeSymbols.map((symbol, index) => (
        <FloatingElement
          key={index}
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            rotate: Math.random() * 360,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: [null, Math.random() * 100 - 50 + parseFloat(index) * 10],
            rotate: [null, Math.random() * 360],
            transition: { 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              repeatType: 'reverse' 
            }
          }}
          style={{
            fontSize: `${Math.random() * 20 + 10}px`,
            left: `${index * 5}%`,
            top: `${(index * 7) % 100}%`
          }}
        >
          {symbol}
        </FloatingElement>
      ))}
    </>
  );
};

// Componente de contêiner com stagger para filhos
export const StaggerContainer = ({ children, delay = 0, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Animação de hover para cards e elementos interativos
export const hoverScale = {
  scale: 1.05,
  y: -10,
  transition: { duration: 0.3 }
};

// Animação de clique
export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.1 }
};

// Animação de cursor piscando
export const blinkingCursor = {
  opacity: [0, 1, 0],
  transition: {
    duration: 0.8,
    repeat: Infinity,
    repeatDelay: 0.2
  }
};

// Componente de cursor piscando
export const Cursor = () => (
  <motion.span
    animate={blinkingCursor}
    style={{ 
      display: 'inline-block', 
      width: '2px', 
      height: '1em', 
      backgroundColor: 'currentColor',
      marginLeft: '2px',
      verticalAlign: 'middle'
    }}
  />
);

// Animação de progresso para barras de habilidades
export const progressVariant = {
  hidden: { width: 0 },
  visible: width => ({
    width: `${width}%`,
    transition: { duration: 1, ease: "easeOut" }
  })
};

// Componente de barra de progresso
export const ProgressBar = ({ percentage }) => (
  <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(100, 255, 218, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={percentage}
      variants={progressVariant}
      style={{ 
        height: '100%', 
        backgroundColor: 'var(--secondary)',
        borderRadius: '4px'
      }}
    />
  </div>
);

// Animação de scroll para setas e indicadores
export const scrollAnimation = {
  y: [0, 10, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: 'loop'
  }
};

// Componente de indicador de scroll
export const ScrollIndicator = () => (
  <motion.div
    animate={scrollAnimation}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'absolute',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      color: 'var(--secondary)',
      opacity: 0.7
    }}
  >
    <span style={{ fontSize: '12px', marginBottom: '5px', fontFamily: 'var(--font-mono)' }}>Scroll</span>
    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0L15.7942 7.5H0.205771L8 0Z" fill="currentColor" transform="rotate(180 8 12)" />
    </svg>
  </motion.div>
);
