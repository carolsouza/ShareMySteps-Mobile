import React, { useState } from "react";
import { BtnComponent } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

import { Container, Content, ContentInput } from "../../styles/global";
import { CreateAccountTitle } from "./styles";

import { TopBar } from "../../components/TopBar";
import api from "../../services/api";

interface UserProps {
  name: string;
  cellphone: string;
  email: string;
  password: string;
}

export default function CreateAccount() {
  const { navigate } = useNavigation<any>();
  const [userData, setUserData] = useState<UserProps>({
    name: "",
    cellphone: "",
    email: "",
    password: "",
  });

  function handleCreateAccount() {
    api
      .post("/users", {userData})
      .then(() => {
        navigate("Home")
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <TopBar topButton="account" />
      <Container bgcolor="#121015">
        <Content>
          <CreateAccountTitle>Crie sua conta</CreateAccountTitle>
          <ContentInput
            value={userData.name}
            onChangeText={(e) =>
              setUserData({ ...userData, name: e })
            }
            placeholder="nome"
            placeholderTextColor="#000000"
          />
          <ContentInput
            value={userData.cellphone}
            onChangeText={(e) =>
              setUserData({ ...userData, cellphone: e })
            }
            placeholder="celular"
            placeholderTextColor="#000000"
          />
          <ContentInput
            value={userData.email}
            onChangeText={(e) =>
              setUserData({ ...userData, email: e })
            }
            placeholder="e-mail"
            placeholderTextColor="#000000"
          />
          <ContentInput
            value={userData.password}
            onChangeText={(e) =>
              setUserData({ ...userData, password: e })
            }
            placeholder="senha"
            placeholderTextColor="#000000"
          />
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
