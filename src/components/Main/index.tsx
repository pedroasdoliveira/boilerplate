import React from "react";
import * as Style from "./style";

const Main = ({
  title = "React avançado",
  description = "React, Typescript, Next e Styled-Components",
}) => {
  return (
    <Style.Wrapper>
      <Style.Logo src="/img/logo.svg" alt="Logo React Avançado" />

      <Style.Title>{title}</Style.Title>

      <Style.Description>{description}</Style.Description>

      <Style.Illustration
        src="/img/hero-illustration.svg"
        alt="Imagem de um desenvolvedor em frente a um computador com codigos na tela."
      />
    </Style.Wrapper>
  );
};

export default Main;
