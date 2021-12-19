import React, { useState } from "react";
import { BtnComponent } from "../../components/Button";
import { useNavigation } from '@react-navigation/native';

import { LoginLogoTitle, LoginLogoImg, LogoContainer } from "./styles";
import { Container, Content, ContentInput } from "../../styles/global";

import Steps from "../../assets/steps.png";

interface UserProps {
  email: string;
  senha: string;
}

export default function Login() {
  const {navigate} = useNavigation<any>();

  function handleLogin() {
    navigate('Home')
  }

  function handleCreateAccount() {
    navigate('CreateAccount')    
  }

  return (
    <Container bgcolor="#121015">
      <Content>
        <LogoContainer>
          <LoginLogoTitle>SHARE MY</LoginLogoTitle>
          <LoginLogoTitle>STEPS</LoginLogoTitle>

          <LoginLogoImg imgTop="28px" imgRight="145px" source={Steps} />
        </LogoContainer>
        

        <ContentInput placeholder="e-mail" placeholderTextColor="#000000" />
        <ContentInput placeholder="senha" placeholderTextColor="#000000" />

        <BtnComponent
          onPress={handleLogin}
          btnText="Entrar"
          btnColor="#349249"
          txtDecoration="none"
          fontSize="24px"
        />

        <BtnComponent
          onPress={handleCreateAccount}
          btnText="Criar Conta"
          btnColor="transparent"
          txtDecoration="underline"
          fontSize="20px"
        />
      </Content>
    </Container>
  );
}

