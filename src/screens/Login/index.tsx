import React, { useState } from "react";
import { BtnComponent } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

import { LoginLogoTitle, LoginLogoImg, LogoContainer } from "./styles";
import { Container, Content, ContentInput } from "../../styles/global";

import Steps from "../../assets/steps.png";
import api from "../../services/api";

interface UserProps {
  email: string;
  senha: string;
}

export default function Login() {
  const { navigate } = useNavigation<any>();

  const [user, setUser] = useState<UserProps>({
    email: "",
    senha: "",
  });

  const [teste, setTeste] = useState("");

  async function handleLogin() {
    // navigate('Home')

    console.log(user)

    await api.post("/auth", {
      email: user.email,
      pass: user.senha
    })
    .catch(function (error) {

      console.log(JSON.stringify(error))
    });
  }

  function handleCreateAccount() {
    navigate("CreateAccount");
  }

  return (
    <Container bgcolor="#121015">
      <Content>
        <LogoContainer>
          <LoginLogoTitle>SHARE MY</LoginLogoTitle>
          <LoginLogoTitle>STEPS</LoginLogoTitle>

          <LoginLogoImg imgTop="28px" imgRight="145px" source={Steps} />
        </LogoContainer>

        <ContentInput
          placeholder="e-mail"
          placeholderTextColor="#000000"
          onChangeText={(e: any) => setUser({ ...user, email: e })}
          value={user.email}
        />
        <ContentInput
          placeholder="senha"
          placeholderTextColor="#000000"
          value={user.senha}
          onChangeText={(e: any) => setUser({ ...user, senha: e })}
        />

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
