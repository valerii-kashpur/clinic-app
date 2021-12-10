import React from 'react';
import styled from 'styled-components';
import angleRight from "media/angle-right-b.svg";

const ButtonVector = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: ${({theme}) => theme.borderRadius.borderRadius};

  background: url(${angleRight});
  background-repeat: no-repeat;
`;

type ButtonTextWithArrowProps = {
    text:string
}


const ButtonTextWithArrow = ({text}: ButtonTextWithArrowProps) => {
    return (
        <>
            {text} <ButtonVector/>
        </>
    );
};

export default ButtonTextWithArrow;