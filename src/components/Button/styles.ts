import styled from "styled-components/native";

interface ButtonProps {
    backgroundcolor: string;
}

interface ButtonTextProps {
    txtDecoration: string;
    fontSize: string;
}

export const ButtonComponent = styled.TouchableOpacity<ButtonProps>`
    background-color: ${(props) => props.backgroundcolor || 'transparent'};
    height: 50px; 
    width: 80%;
    margin-top: 30px;
    border-radius: 5px;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
    color: #FFF;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    font-size: ${(props) => props.fontSize || '16px'};
    text-decoration-line: ${(props) => props.txtDecoration || 'none'}
`;