import React from "react";
import { BtnComponent } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

import { Container, Content, ContentInput } from "../../styles/global";
import { CreateAccountTitle } from "./styles";

import { TopBar } from "../../components/TopBar";

export default function CreateAccount() {
  const { navigate } = useNavigation<any>();

  function handleCreateAccount() {
    navigate("Home");
  }

  return (
    <>
      <TopBar topButton="account"/>
      <Container bgcolor="#121015">
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
    </>
  );
}
