import styled from 'styled-components';
import { typeScale } from '../utils';

import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
`,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
`,
  warning: ({ props }) => `
    background-color: ${props.theme.status.warningColor};

    &:hover, &:focus{
      background-color: ${props.theme.status.warningColorHover};
    }
    &:active{
      background-color: ${props.theme.status.warningColorActive};
    }
  `,
  error: ({ props }) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorOnPrimary};

    &:hover, &:focus{
      background-color: ${props.theme.status.errorColorHover};
    }
    &:active{
      background-color: ${props.theme.status.errorColorActive};
    }
  `,
  success: ({ props }) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorOnPrimary};

    &:hover, &:focus{
      background-color: ${props.theme.status.successColorHover};
      
    }
    &:active{
      background-color: ${props.theme.status.successColorActive};
      
    }
  `,
};
const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 4px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  outline: none;
  margin: 20px;
`;

export const PrimaryButton = styled(Button)`
  color: ${(props) => props.theme.textColorOnPrimary};
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  transition: all 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
  }

  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorInverted};
  }
  &:disabled {
    background: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textColorOnPrimary};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  color: ${(props) => props.theme.primaryColor};
  border: 2px solid ${(props) => props.theme.primaryColor};
  background: none;
  transition: all 0.2s linear;

  &:hover,
  &:focus {
    border: 2px solid ${(props) => props.theme.primaryHoverColor};
  }
  &:active {
    border: 2px solid ${(props) => props.theme.primaryActiveColor};
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColorInverted};
  }
  &:disabled {
    border: 2px solid ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
  color: ${(props) => props.theme.primaryColor};
  border: 2px solid ${(props) => props.theme.textColorOnPrimary};
  background: none;
  text-decoration: underline;

  &:hover {
    border: 2px solid ${(props) => props.theme.primaryHoverColor};
  }
  &:active {
    border: 2px solid ${(props) => props.theme.primaryActiveColor};
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColorInverted};
  }
  &:disabled {
    border: none;
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
    text-decoration: none;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
