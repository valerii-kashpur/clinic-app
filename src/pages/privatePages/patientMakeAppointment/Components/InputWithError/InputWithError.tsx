import React, { FC } from "react";
import * as Styled from "../VisitReasons/VisitReasonsStyles";

interface CustomInputComponent {
  register: any, name: string, errors: any,
  type: string, placeholder: string
}

const InputWithError: FC<CustomInputComponent> = ({ register, name, errors, type, placeholder }) => {
  return (
    <>
      <Styled.Input {...register(name)} placeholder={placeholder} type={type} />
      {errors[name] ? (
        <Styled.ErrorMessage>{errors[name]?.message}</Styled.ErrorMessage>
      ) : null}
    </>
  );
};

export default React.memo(InputWithError);
