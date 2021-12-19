import React, { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';

import {
  TopContainer,
  LogoArea,
  LogoTitle,
  LogoImage,
  OptionButton,
  OptionImage
} from "./styles";

import Steps from "../../assets/steps.png";
import Setting from "../../assets/setting.png";
import Back from "../../assets/back.png";

interface TopBarProps {
  topButton: string;
}

export const TopBar: React.FC<TopBarProps> = ({ topButton }) => {
    const { navigate } = useNavigation<any>();
    
    function handleBackButton() {
        navigate.goBack();
    }

    function handleSettingsButton() {
        navigate('Settings');
    }

  return (
    <TopContainer>
        {topButton === "settings" || topButton === "account"
          ? 
            <OptionButton onPress={handleBackButton}>
                <OptionImage source={Back}></OptionImage>
            </OptionButton>
          : 
            <OptionButton onPress={handleSettingsButton}> 
                <OptionImage source={Setting}></OptionImage>
            </OptionButton>
        }
      <LogoArea>
        <LogoTitle>SHARE MY</LogoTitle>
        <LogoTitle>STEPS</LogoTitle>
        <LogoImage source={Steps} />
      </LogoArea>
    </TopContainer>
  );
};
