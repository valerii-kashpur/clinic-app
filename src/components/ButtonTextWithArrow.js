import React from 'react';
import styled from 'styled-components';
import angleRight from "media/angle-right-b.svg";

const ButtonVector = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: ${(props) => props.theme.borderRadius.borderRadius};

  background: url(${angleRight});
  background-repeat: no-repeat;
`;


const ButtonTextWithArrow = ({text}) => {
    return (
        <>
            {text} <ButtonVector/>
        </>
    );
};

export default ButtonTextWithArrow;