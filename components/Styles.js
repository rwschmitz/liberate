import styled from 'styled-components';

// Colors

const lightGray = '#f5f7fa';
const medGray = '#52606d';
const medBlue = '#40c3f7';

// Fonts

const primaryFont = 'Avenir';
const smallFontSize = 16;
const mediumFontSize = 24;
const largeFontSize = 32;

// Text

export const TextStyles = styled.Text`
color: ${props => props.textType === 'emphasis' ? medBlue : lightGray};
font-family: ${primaryFont};
font-size: ${smallFontSize}px;
padding-bottom: 2px;
`;

// Views

export const ViewStyles = styled.View`
align-items: flex-start;
background-color: ${medGray};
flex: 1;
justify-content: center;
padding-left: 16px;
`;

// Components

export const CustomButtonStyles = styled.TouchableOpacity`
background-color: ${props => props.buttonType === 'emphasis' ? medBlue : lightGray};
border-radius: 8px;
margin-bottom: 32px;
padding-bottom: 8px;
padding-left: 16px;
padding-right: 16px;
padding-top: 8px;
`;

export const CustomButtonTextStyles = styled.Text`
font-family: ${primaryFont};
font-size: ${smallFontSize}px;
color: ${props => props.buttonType === 'emphasis' ? lightGray : medGray};
`;

export const TextInputStyles = styled.TextInput`
background-color: ${lightGray};
border-color: ${lightGray};
border-width: 2px;
border-radius: 8px;
color: ${medGray};
font-size: ${smallFontSize}px;
height: 40px;
margin-bottom: 16px;
padding-left: 8px;
padding-right: 8px;
width: 300px;
`;
