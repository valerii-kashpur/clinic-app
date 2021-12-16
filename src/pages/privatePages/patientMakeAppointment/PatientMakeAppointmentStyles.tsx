import styled from "styled-components";
import baseButtonStyles from "styles/baseButtonStyles";

export const List = styled.ul`
  display: flex;
  gap: 0 104px;
`;

export const TitleWrapper = styled.div`
  margin: 72px 0 40px 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fonts.mobileFontSize};
  line-height: 130%;
  font-weight: ${({ theme }) => theme.fonts.fontStyle};

  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-right: 16px;

  border: 1px solid black;
  border-radius: 50%;
`;

export const ListItem = styled.li`
  width: 100%;
`;

export const Button = styled(baseButtonStyles)`
  width: 160px;
  height: 56px;
  margin-top: 39px;
  margin-left: auto;
  margin-right: 50px;
`;
