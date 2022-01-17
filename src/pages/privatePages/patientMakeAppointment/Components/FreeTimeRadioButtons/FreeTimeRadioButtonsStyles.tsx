import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 464px;
  gap: 16px;
  & > div {
    width: 104px;
    height: 40px;
  }
`;

type LabelProps = {
  notReady: boolean;
  current: boolean;
};

export const Label = styled.label<LabelProps>`
  display: flex;
  width: 104px;
  height: 40px;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.fontStyleNormal};
  font-weight: ${({ theme }) => theme.fonts.fontWeightBold};
  font-size: ${({ theme }) => theme.fonts.fontSize15};
  line-height: ${({ theme }) => theme.fonts.lineHeight130};
  background-color: ${({ notReady, theme }) =>
    notReady ? theme.colors.disabledButtonColor : theme.colors.buttonTextColor};
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius};
  color: ${({ notReady, theme }) =>
    notReady ? theme.colors.buttonTextColor : theme.colors.baseColor};
  border: 1px solid white;

  &:hover,
  &:focus {
    ${({ notReady }) =>
      !notReady &&
      `    border: 1px solid #7297ff;
    color: #7297ff;`}
  }
  ${({ current, notReady }) =>
    !notReady && current
      ? `
    border: 1px solid #7297ff;
    color: #7297ff;
  `
      : null};

  ${({ notReady }) =>
    notReady &&
    `
    pointer-events: none;
  `};
`;

export const Input = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
  &:checked + ${Label} {
    border: 1px solid #7297ff;
  }
  &:focus + ${Label} {
    border: 1px solid #7297ff;
  }
`;
