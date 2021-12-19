import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type NavButtonProps = {
  current?: string;
  disabled?: boolean;
};

export const NavButton = styled(Link)<NavButtonProps>`
  min-width: 120px;
  min-height: 40px;
  margin-right: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius};
  border: none;
  background: ${({ current, theme }) =>
    current ? theme.colors.accentColor : theme.colors.buttonTextColor};
  color: ${({ current, theme }) =>
    current ? theme.colors.buttonTextColor : theme.colors.accentColor};

  &:disabled {
    background: ${({ theme }) => theme.colors.disabledButtonColor};
    color: ${({ theme }) => theme.colors.buttonTextColor};
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 160px;
  }
`;

type NavTabProps = {
  children: React.ReactNode;
  to: string;
  current?: string;
  disabled?: boolean;
};

const NavTab = ({ children, to, current, disabled }: NavTabProps) => {
  return (
    <NavButton to={to} current={current} disabled={disabled}>
      {children}
    </NavButton>
  );
};

export default NavTab;
