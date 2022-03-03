import styled from "styled-components/native";

interface OptionButtonProps {
    bgImage: string;
}

export const TopContainer = styled.View`
  background: #000000;
  width: 100%;
  position: relative;
  top: 0px;
  height: 70px;
`;

export const LogoArea = styled.View`
  width: 100%;
  align-items: center;
  position: absolute;
  top: 10px;
`;

export const LogoTitle = styled.Text`
  color: #ffffff;
  width: 90%;
  font-size: 20px;
  font-weight: bold;
  text-align: right;
  position: relative;
  line-height: 25px;
`;

export const LogoImage = styled.Image`
  position: absolute;
  top: 28px;
  right: 80px;
  height: 20px;
  width: 40px;
`;

export const OptionButton = styled.TouchableOpacity`
    height:100%;
    width: 80px;
    justify-content: center;
    z-index: 1;
`;

export const OptionImage = styled.ImageBackground`
    width: 25px;
    height: 25px; 
    margin-left: 20px;
    z-index: 0;
`;
