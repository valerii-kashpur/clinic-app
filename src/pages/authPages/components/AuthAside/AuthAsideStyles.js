import styled from "styled-components";
import bgImage from "media/bg.jpg";

const Container = styled.div`
  padding-top: 72px;

  background-size: 100%;
  overflow: hidden;
  background: url(${bgImage}) no-repeat;

  @media ${({theme}) => theme.media.tablet} {
    padding-top: 0px;
    background: url(${bgImage}) no-repeat;
    background-size: cover;
  }
`;

const Aside = styled.aside`
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;

  border-radius: 24px 24px 0px 0px;
  height: calc(90vh - 2px);

  background-color: ${({theme}) => theme.colors.asideBackgroundColor};

  @media ${({theme}) => theme.media.tablet} {
    margin-left: auto;
    top: 0;
    border-radius: 0;
    width: 560px;
    height: 100vh;

    padding-top: ${({padding}) => padding};
  }

  @media ${({theme}) => theme.media.desktop} {
    width: 560px;
  } ;
`;

const AsideWrapper = styled.div`
  margin: 0 auto;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media ${({theme}) => theme.media.tablet} {
    margin: 0 auto;
    width: 368px;
  }
`;

const AsideTitle = styled.h2`
  margin: 0;
  margin-bottom: 24px;

  font-weight: ${({theme}) => theme.fonts.boldFontWeight};
  font-size: 20px;
  line-height: 24px;

  @media ${({theme}) => theme.media.tablet} {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 26px;
  } ;
`;

export const styles = {
  Container,
  Aside,
  AsideWrapper,
  AsideTitle,
};
