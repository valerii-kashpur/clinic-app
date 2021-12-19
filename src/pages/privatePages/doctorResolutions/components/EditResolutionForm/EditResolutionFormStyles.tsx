import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 560px;
  height: 467px;
`;

export const Form = styled.form`
  padding: 40px 40px;
`;

export const FormTitle = styled.h4`
  margin-bottom: 24px;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const Image = styled.img`
  margin-right: 18px;
`;

export const ButtonImage = styled.img`
  margin-right: 8px;
`;

export const Name = styled.p``;

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Label = styled.label`
  margin-bottom: 16px;
`;

export const TextArea = styled.textarea`
  width: 480px;
  height: 160px;
  overflow: auto;

  border: ${({ theme }) => theme.inputsBorders.asideInputBorder};
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
  border-radius: ${({ theme }) => theme.borderRadius.inputsBorderRadius};
  color: ${({ theme }) => theme.colors.baseColor}; ;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 31px;

  &::before {
    content: "";

    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 1px;

    display: block;
    background: ${({ theme }) => theme.colors.disabledButtonColor};
    opacity: 0.5;
  }
`;
