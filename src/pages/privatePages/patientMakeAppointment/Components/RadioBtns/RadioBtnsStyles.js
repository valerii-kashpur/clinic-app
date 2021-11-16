import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 464px;
  gap: 16px;
`;

export const Label = styled.label`
  display: inline-block;
  padding: 8px 16px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  background-color: ${(props) => (props.notReady ? "#DCE0EC" : "#ffffff")};
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 8px;
  color: ${(props) => (props.notReady ? "#ffffff" : "#202225")};
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
      : null}
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
