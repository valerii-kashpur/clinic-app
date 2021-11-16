import styled from "styled-components";

const baseButtonStyles = styled.button`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border-radius: ${(props) => props.theme.borderRadius.borderRadius};
  border: none;

  background-color: ${(props) => props.theme.colors.accentColor};
  color: ${(props) => props.theme.colors.inputBackgroundColor};

  font-weight: ${(props) => props.theme.fonts.boldFontWeight};
  font-size: ${(props) => props.theme.fonts.mobileFontSize};
  line-height: 19px;

  @media ${(props) => props.theme.media.tablet} {
    font-size: 17px;
    line-height: 24px;
  }

  &:hover,
  &:focus {
    background-color: #476cd3;
  }

  &:disabled{
    background-color: #dce0ec;
  };
`;

export default baseButtonStyles;
