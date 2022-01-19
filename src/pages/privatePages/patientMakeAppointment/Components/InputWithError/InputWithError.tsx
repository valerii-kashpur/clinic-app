import React, { FC } from "react";
import * as Styled from "../VisitReasons/VisitReasonsStyles";



interface CustomInputComponent {
  register: any, name: string, error?: string,
  type: string, placeholder: string
}

const InputWithError: FC<CustomInputComponent> = ({ register, name, error, type, placeholder }) => {
  return (
    <>
      <Styled.Input {...register(name)} placeholder={placeholder} type={type} />
      {error ? (
        <Styled.ErrorMessage>{error}</Styled.ErrorMessage>
      ) : null}
    </>
  );
};

export default React.memo(InputWithError);
