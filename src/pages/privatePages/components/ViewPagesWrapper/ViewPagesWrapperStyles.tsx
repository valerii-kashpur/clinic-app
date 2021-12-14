import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.viewPagesContainerBackgroundColor};

  @media ${({theme}) => theme.media.tablet} {
    padding: 0 64px;
    padding-bottom: 48px;
    height: 100vh;
  } ;
`;

export const Header = styled.header`
  display: flex;
  height: 72px;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
  justify-content: space-between;

  @media ${({theme}) => theme.media.tablet} {
    height: 80px;
  } ;
`;

export const Logo = styled.img`
  width: 132px;
  height: 32px;
`;

export const HeaderLogoWrapper = styled.div`
  display: flex;
`;

export const HeaderUserNAmeWrapper = styled.div`
  display: none;
  text-align: end;

  @media ${({theme}) => theme.media.tablet} {
    display: block;
    margin-right: 16px;
  } ;
`;

export const HeaderUserAvatarWrapper = styled.div`
  position: relative;
  display: block;
  width: 40px;
  height: 40px;

  @media ${({theme}) => theme.media.tablet} {
    display: flex;
    text-align: end;
  } ;
`;

export const HeaderUserStatus = styled.span`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;

  border-radius: 50%;
  width: 12px;
  height: 12px;

  background-image: radial-gradient(
    ellipse at center,
    ${({theme}) => theme.colors.pointerColor} 40%,
    ${({theme}) => theme.colors.viewPagesContainerBackgroundColor} 40%,
    ${({theme}) => theme.colors.viewPagesContainerBackgroundColor} 100%
  );
`;

export const AppCardsSection = styled.section`
  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;

  background: ${({theme}) => theme.colors.asideBackgroundColor};
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.32);
  border-radius: 16px 16px 0px 0px;

  @media ${({theme}) => theme.media.tablet} {
    padding-left: 48px;
    padding-right: 48px;

    border-radius: 16px;
    height: 92%;
  }
`;
