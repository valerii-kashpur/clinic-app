import styled from "styled-components";
import { Link } from "react-router-dom";
import angleRight from "media/angle-right.svg";

export const NavWrapper = styled.div`
  display: flex;
  gap: 0 8px;
  align-items: center;
`;
export const NavLink = styled(Link)`
  font-weight: ${({theme}) => theme.fonts.boldFontWeight};
  font-size: ${({theme}) => theme.fonts.mobileFontSize};
  line-height: 130%;
  text-decoration: none;

  color: ${({theme}) => theme.colors.accentColor};

  @media ${({theme}) => theme.media.tablet} {
    line-height: 19px;
  } ;
`;

export const VectorSpan = styled.svg`
  display: inline-block;
  width: 24px;
  height: 24px;

  background: url(${angleRight});
  background-repeat: no-repeat;
`;

export const BreadCrumbsCurrent = styled.p`
  font-size: ${({theme}) => theme.fonts.mobileFontSize};
  line-height: 130%;
  font-weight: ${({theme}) => theme.fonts.fontStyle};

  color: ${({theme}) => theme.colors.secondaryTextColor};
`;