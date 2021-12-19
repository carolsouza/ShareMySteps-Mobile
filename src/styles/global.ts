import styled from "styled-components/native";

interface ContainerProps {
  bgcolor: string;
}

interface LogoProps {
  imgTop: string;
  imgRight: string;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgcolor || "#FFF"};
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
`;

export const ContentInput = styled.TextInput`
  background-color: #e1e1e6;
  color: #000000;
  width: 80%;
  padding: 15px;
  border-radius: 5px;
  margin-top: 30px;
`;
