import styled, { keyframes } from "styled-components";

// Componente funcional About
const About = () => {
  return (
    <Container>
      {/* Wrapper para o conteúdo da seção "Sobre Mim" */}
      <ContentWrapper>
        <Title>Sobre Mim</Title>

        {/* Descrição */}
        <Description>
          Sou um desenvolvedor apaixonado por tecnologia e sempre em busca de
          novos desafios. Minha jornada começou quando descobri o poder da
          programação e desde então, não parei mais de aprender e evoluir.
        </Description>

        {/* Wrapper para a seção de habilidades */}
        <SkillsWrapper>
          <SkillTitle>Algumas de minhas habilidades:</SkillTitle>

          {/* Lista de habilidades */}
          <SkillList>
            <Skill>
              <SkillIcon>💻</SkillIcon>
              <SkillName>Desenvolvimento Web</SkillName>
            </Skill>
            <Skill>
              <SkillIcon>📱</SkillIcon>
              <SkillName>Desenvolvimento Mobile</SkillName>
            </Skill>
            <Skill>
              <SkillIcon>🎨</SkillIcon>
              <SkillName>Design de Interfaces</SkillName>
            </Skill>
          </SkillList>
        </SkillsWrapper>
      </ContentWrapper>
    </Container>
  );
};

// Animação de entrada (slide-up)
const slideUpAnimation = keyframes`
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
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

// Wrapper para o conteúdo da seção "Sobre Mim"
const ContentWrapper = styled.div`
  max-width: 600px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: ${slideUpAnimation} 0.5s ease-in-out;
`;

// Título
const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 20px;
`;

// Descrição
const Description = styled.p`
  font-size: 18px;
  color: #666666;
  line-height: 1.5;
  margin-bottom: 30px;
`;

// Wrapper para a seção de habilidades
const SkillsWrapper = styled.div`
  margin-top: 30px;
`;

// Título da seção de habilidades
const SkillTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
`;

// Lista de habilidades
const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

// Item da lista de habilidades
const Skill = styled.li`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 10px;
`;

// Ícone da habilidade
const SkillIcon = styled.span`
  font-size: 24px;
  margin-right: 8px;
`;

// Nome da habilidade
const SkillName = styled.span`
  font-size: 16px;
  color: #333333;
`;

export default About;