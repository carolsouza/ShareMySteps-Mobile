import React, { useEffect } from "react";
import { CommonActions, useNavigation } from '@react-navigation/native';

import {
  TopContainer,
  LogoArea,
  LogoTitle,
  LogoImage,
  OptionButton,
  OptionImage,
} from "./styles";

import Steps from "../../assets/steps.png";
import Setting from "../../assets/setting.png";
import Back from "../../assets/back.png";

interface TopBarProps {
  topButton: string;
}


export function TopBar  ({ topButton }: TopBarProps ){
  const { navigate, goBack } = useNavigation<any>();

  function handleBackButton() {
    goBack();
  }

  function handleSettingsButton() {
    navigate("Settings");
  }

  return (
    <TopContainer>
      {topButton === "settings" || topButton === "account" ? (
        <OptionButton onPress={handleBackButton}>
          <OptionImage source={Back}></OptionImage>
        </OptionButton>
      ) : (
        <OptionButton onPress={handleSettingsButton}>
          <OptionImage source={Setting}></OptionImage>
        </OptionButton>
      )}
      <LogoArea>
        <LogoTitle>SHARE MY</LogoTitle>
        <LogoTitle>STEPS</LogoTitle>
        <LogoImage source={Steps} />
      </LogoArea>
    </TopContainer>
  );
};
