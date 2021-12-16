import styled from 'styled-components/native';

interface ImageProps{
    imgTop: string;
    imgLeft: string;
}

export const LoginLogoTitle = styled.Text `
    color: #FFFFFF;
    width: 80%;
    font-size: 50px;
    font-weight: bold;
    text-align: right;
    position: relative;
    line-height: 50px;
`;

export const LoginLogoImg = styled.Image<ImageProps>`
    position: absolute;
    top: ${(props) => props.imgTop || '0px'};
    left: ${(props) => props.imgLeft || '0px'};
`;

