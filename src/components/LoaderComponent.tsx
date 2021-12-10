import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
`;

const LoaderComponent = () => {
  return (
    <LoaderWrapper>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </LoaderWrapper>
  );
};

export default LoaderComponent;
