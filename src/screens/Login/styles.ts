import styled from 'styled-components/native';

interface ImageProps{
    imgTop: string;
    imgRight: string;
}

export const LogoContainer = styled.View`
    position: relative;
    width: 80%;
`;

export const LoginLogoTitle = styled.Text `
    color: #FFFFFF;
    font-size: 50px;
    font-weight: bold;
    text-align: right;
    position: relative;
    line-height: 50px;
`;

export const LoginLogoImg = styled.Image<ImageProps>`
    position: absolute;
    top: ${(props) => props.imgTop || '0px'};
    right: ${(props) => props.imgRight || '0px'};
`;

