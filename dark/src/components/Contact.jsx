import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 100px 0;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: clamp(40px, 5vw, 60px);
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

const ContactDescription = styled.p`
  margin-bottom: 50px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  position: relative;
  width: 100%;
`;

const FormLabel = styled.label`
  position: absolute;
  left: 15px;
  top: ${props => props.focused || props.hasValue ? '-12px' : '15px'};
  font-size: ${props => props.focused || props.hasValue ? '12px' : '16px'};
  color: ${props => props.focused ? ({ theme }) => theme.colors.secondary : ({ theme }) => theme.colors.textSecondary};
  background-color: ${props => props.focused || props.hasValue ? ({ theme }) => theme.colors.background : 'transparent'};
  padding: ${props => props.focused || props.hasValue ? '0 5px' : '0'};
  transition: ${({ theme }) => theme.transitions.default};
  pointer-events: none;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 15px;
  background-color: transparent;
  border: 1px solid ${props => props.focused ? ({ theme }) => theme.colors.secondary : ({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 15px;
  background-color: transparent;
  border: 1px solid ${props => props.focused ? ({ theme }) => theme.colors.secondary : ({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  resize: none;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 15px 25px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: center;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 60px;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 24px;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-5px);
  }
`;

const CodeComment = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 20px;
  opacity: 0.7;
  text-align: center;
`;

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [focusedField, setFocusedField] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFocus = (field) => {
    setFocusedField(field);
  };
  
  const handleBlur = () => {
    setFocusedField(null);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    alert('Mensagem enviada com sucesso!');
    setFormState({ name: '', email: '', message: '' });
  };
  
  const isFormValid = formState.name && formState.email && formState.message;

  return (
    <ContactContainer id="contact">
      <div className="container">
        <ContactContent>
          <CodeComment>{'// Vamos conversar?'}</CodeComment>
          <ContactTitle>Entre em Contato</ContactTitle>
          <ContactDescription>
            Estou sempre aberto a novas oportunidades e colaborações. 
            Se você tem um projeto em mente ou apenas quer dizer olá, 
            ficarei feliz em receber sua mensagem!
          </ContactDescription>
          
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel 
                htmlFor="name" 
                focused={focusedField === 'name'} 
                hasValue={formState.name.length > 0}
              >
                Nome
              </FormLabel>
              <FormInput 
                type="text" 
                id="name" 
                name="name" 
                value={formState.name} 
                onChange={handleChange} 
                onFocus={() => handleFocus('name')} 
                onBlur={handleBlur} 
                focused={focusedField === 'name'} 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel 
                htmlFor="email" 
                focused={focusedField === 'email'} 
                hasValue={formState.email.length > 0}
              >
                Email
              </FormLabel>
              <FormInput 
                type="email" 
                id="email" 
                name="email" 
                value={formState.email} 
                onChange={handleChange} 
                onFocus={() => handleFocus('email')} 
                onBlur={handleBlur} 
                focused={focusedField === 'email'} 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel 
                htmlFor="message" 
                focused={focusedField === 'message'} 
                hasValue={formState.message.length > 0}
              >
                Mensagem
              </FormLabel>
              <FormTextarea 
                id="message" 
                name="message" 
                value={formState.message} 
                onChange={handleChange} 
                onFocus={() => handleFocus('message')} 
                onBlur={handleBlur} 
                focused={focusedField === 'message'} 
                required 
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={!isFormValid}>
              Enviar Mensagem
            </SubmitButton>
          </ContactForm>
          
          <SocialLinks>
            <SocialLink href="https://github.com/vandersonlima" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/vandersonlima" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </SocialLink>
            <SocialLink href="https://twitter.com/vandersonlima" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink href="mailto:contato@vandersonlima.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </SocialLink>
          </SocialLinks>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

export default Contact;
