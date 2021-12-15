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
  color: #a1abc9;
  background: none;

  &:hover,
  &:focus,
  &:active {
    background-color: #476cd3;
    color: white;
    border-radius: 8px;
  }

  &:disabled {
    background-color: #dce0ec;
    border-radius: 8px;
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
