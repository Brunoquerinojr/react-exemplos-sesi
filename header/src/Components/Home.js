import styled from "styled-components";

// Componente funcional Home
const Home = () => {
  return (
    <Container>
      {/* Em React, "Wrapper" é um termo comumente usado para se referir a um componente que envolve (wraps) um ou mais outros componentes.  */}
      {/* Wrapper para o conteúdo de texto */}
      <ContentWrapper>
        <Title>Bem-vindo!</Title>
        <Subtitle>Explore nosso site e descubra tudo o que temos a oferecer.</Subtitle>
        <CallToAction href="#">Conheça Agora</CallToAction>
      </ContentWrapper>

      {/* Wrapper para a imagem de destaque */}
      <ImageWrapper>
        <HeroImage src="https://via.placeholder.com/500x300" alt="Hero Image" />
      </ImageWrapper>
    </Container>
  );
};

// Container principal
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

// Wrapper para o conteúdo de texto
const ContentWrapper = styled.div`
  max-width: 500px;
  padding: 40px;
  text-align: center;
`;

// Título principal
const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 20px;
`;

// Subtítulo
const Subtitle = styled.p`
  font-size: 18px;
  color: #666666;
  line-height: 1.5;
  margin-bottom: 30px;
`;

// Botão de "Call to Action"
const CallToAction = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: #007bff;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

// Wrapper para a imagem de destaque
const ImageWrapper = styled.div`
  margin-left: 40px;
`;

// Imagem de destaque
const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export default Home;