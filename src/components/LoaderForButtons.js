import React from "react";
import Loader from "react-loader-spinner";

const LoaderForButtons = () => {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={38}
      width={38}
      timeout={3000} //3 secs
    />
  );
};

export default LoaderForButtons;
