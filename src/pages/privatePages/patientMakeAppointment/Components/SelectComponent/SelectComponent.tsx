import React, { FC } from "react";
import Select from "react-select";
import * as Styled from "./SelectComponentStyles";
import InputLabel from "components/InputLabel";

type SelectProps = {
  text: string;
  onChange: (data: any) => void;
  isDisabled?: boolean;
  options: { value: string; label: string }[];
  placeholder: string;
  value: { value: string; label: string };
  isLoading: boolean;
};

const SelectComponent: FC<SelectProps> = ({
  text,
  onChange,
  isDisabled,
  options,
  placeholder,
  value,
  isLoading,
}) => {
  return (
    <div>
      <Styled.SelectTitle>
        <InputLabel htmlFor={text}>{text}</InputLabel>
      </Styled.SelectTitle>
      <Select
        defaultValue={null}
        onChange={onChange}
        value={value.label ? value : null}
        options={options}
        isDisabled={isDisabled}
        styles={Styled.customStyles}
        inputId={placeholder}
        data-testid={text}
        placeholder={placeholder}
        isLoading={isLoading}
      />
    </div>
  );
};

export default React.memo(SelectComponent);
