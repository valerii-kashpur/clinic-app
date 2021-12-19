import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 24px 16px 0 0;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

export const BaseButton = styled.button`
  width: 32px;
  height: 32px;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.buttonsBorderRadius};

  color: ${({ theme }) => theme.color.secondaryTextColor};
  background: none;

  &:hover,
  &:focus,
  &:active {
    background-color: #476cd3;
    color: ${({ theme }) => theme.color.buttonTextColor};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.alterButtonBackgroundColor};
  }
`;

export const ResultsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 64px;
`;

export const ArrowButton = styled(BaseButton)``;

export const PagesButtonWrapper = styled.div`
  margin: 0 16px;
`;
