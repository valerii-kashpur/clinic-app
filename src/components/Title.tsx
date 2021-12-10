import React from "react";
import styled from "styled-components";

type StyledTitleProps = {
  margin:string
}

const StyledTitle = styled.h2<StyledTitleProps>`
  font-weight: ${({theme}) => theme.fonts.boldFontWeight};
  font-size: 20px;
  line-height: 24px;
  margin: ${({margin}) => margin};

  @media ${({theme}) => theme.media.tablet} {
    font-size: 24px;
    line-height: 26px;
  } ;
`;

type TitleProps = {
  children: React.ReactNode, marginProp:string
}

const Title = ({children, marginProp}:TitleProps) => {
  return <StyledTitle margin={marginProp}>{children}</StyledTitle>;
};

export default Title;
