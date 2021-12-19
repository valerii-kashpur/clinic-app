import styled from "styled-components";

type baseButtonStylesTypes = {
  margin: string;
  width: string;
  height: string;
  key: string;
};

const baseButtonStyles = styled.button<baseButtonStylesTypes>`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  border-radius: ${({ theme }) => theme.borderRadius.borderRadius};
  border: none;

  background-color: ${({ theme }) => theme.colors.accentColor};
  color: ${({ theme }) => theme.colors.inputBackgroundColor};

  font-weight: ${({ theme }) => theme.fonts.fontWeightBold};
  font-size: ${({ theme }) => theme.fonts.mobileFontSize};
  line-height: 19px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fonts.fontSize17};
    line-height: ${({ theme }) => theme.fonts.lineHeight141};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.buttonHoverColor};
  }

  &:disabled {
    background-color: background-color: ${({ theme }) =>
      theme.colors.disabledButtonColor}; 
  }
`;

export default baseButtonStyles;
