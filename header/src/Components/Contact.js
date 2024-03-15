import styled, { keyframes } from "styled-components";

// Componente funcional Contact
const Contact = () => {
  return (
    <Container>
      {/* Wrapper para o conteúdo do formulário */}
      <ContentWrapper>
        <Title>Entre em Contato</Title>

        {/* Formulário de contato */}
        <Form>
          {/* Grupo de campos para o nome */}
          <FormGroup>
            <Label htmlFor="name">Nome</Label>
            <Input type="text" id="name" placeholder="Digite seu nome" />
          </FormGroup>

          {/* Grupo de campos para o email */}
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Digite seu email" />
          </FormGroup>

          {/* Grupo de campos para a mensagem */}
          <FormGroup>
            <Label htmlFor="message">Mensagem</Label>
            <Textarea id="message" rows="5" placeholder="Digite sua mensagem" />
          </FormGroup>

          {/* Botão de envio do formulário */}
          <SubmitButton type="submit">Enviar</SubmitButton>
        </Form>
      </ContentWrapper>
    </Container>
  );
};

// Animação de entrada (fade-in e slide-up)
const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container principal
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

// Wrapper para o conteúdo do formulário
const ContentWrapper = styled.div`
  max-width: 500px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeInAnimation} 0.5s ease-in-out;
`;

// Título do formulário
const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 20px;
  text-align: center;
`;

// Estilo do formulário
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

// Estilo dos grupos de campos
const FormGroup = styled.div`
  margin-bottom: 20px;
`;

// Estilo dos labels
const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 8px;
  display: block;
`;

// Estilo dos campos de input
const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  width: 100%;
`;

// Estilo da área de texto
const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  width: 100%;
  resize: vertical;
`;

// Estilo do botão de envio
const SubmitButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Contact;