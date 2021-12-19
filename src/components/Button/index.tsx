import React from "react";

import { TouchableOpacityProps } from "react-native";

import { ButtonComponent, ButtonText } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  btnText: string;
  btnColor: string;
  txtDecoration: string;
  fontSize: string;
}

export const BtnComponent: React.FC<ButtonProps> = ({
  onPress,
  btnText,
  btnColor,
  txtDecoration,
  fontSize
}) => {
  return (
    <ButtonComponent onPress={onPress} backgroundcolor={btnColor}>
      <ButtonText txtDecoration={txtDecoration} fontSize={fontSize}>{btnText}</ButtonText>
    </ButtonComponent>
  );
};
