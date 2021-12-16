import React from "react";
import { BtnComponent } from "../../components/Button";
import {
  Container,
  Content,
  ContentInput,
  LogoTitle,
  LogoImage,
  LogoArea,
} from "../../styles/global";
import { CreateAccountTitle } from "./styles";

import Steps from "../../assets/steps.png";

export default function CreateAccount() {
  function handleCreateAccount() {
    console.log("teste 2");
  }

  return (
    <Container bgcolor="#121015">
      <LogoArea>
        <LogoTitle>SHARE MY</LogoTitle>
        <LogoTitle>STEPS</LogoTitle>
        <LogoImage imgTop="28px" imgRight="100px" source={Steps} />
      </LogoArea>
      <Content>
        <CreateAccountTitle>Crie sua conta</CreateAccountTitle>
        <ContentInput placeholder="nome" placeholderTextColor="#000000" />
        <ContentInput placeholder="celular" placeholderTextColor="#000000" />
        <ContentInput placeholder="e-mail" placeholderTextColor="#000000" />
        <ContentInput placeholder="senha" placeholderTextColor="#000000" />
        <BtnComponent
          onPress={handleCreateAccount}
          btnText="Criar"
          btnColor="#349249"
          txtDecoration="none"
          fontSize="24px"
        />
      </Content>
    </Container>
  );
}
