import { ThemeProvider } from 'styled-components';

const theme = {
  breakpoints: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },
  colors: {
    primary: '#0a192f',
    secondary: '#64ffda',
    textPrimary: '#ccd6f6',
    textSecondary: '#8892b0',
    background: '#0a192f',
    backgroundLight: '#112240',
    white: '#e6f1ff',
    black: '#020c1b',
    gray: '#8892b0',
  },
  fonts: {
    sans: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif",
    mono: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    heading: '32px',
    subheading: '24px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    section: '100px',
  },
  transitions: {
    default: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
    slow: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)',
  },
  shadows: {
    small: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
    medium: '0 20px 30px -15px rgba(2, 12, 27, 0.7)',
    large: '0 30px 60px rgba(0, 0, 0, 0.12)',
  },
  borderRadius: {
    small: '3px',
    medium: '5px',
    large: '10px',
    round: '50%',
  },
  zIndex: {
    header: 100,
    overlay: 200,
    modal: 300,
  },
};

export default theme;
