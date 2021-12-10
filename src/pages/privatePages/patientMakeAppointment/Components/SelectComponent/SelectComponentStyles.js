import styled from "styled-components";
import angleDown from "media/angle-down.svg";
import angleUp from "media/angle-up.svg";

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: "54px",
    border: "1px solid #dce0ec",
    boxShadow: "0px 4px 32px rgba(218, 228, 255, 0.16)",
    borderRadius: "8px",
    paddingLeft: "24px",
    paddingRight: "24px",
    fontFamily: "Poppins",
    fontDtyle: "normal",
    fontWeight: "normal",
    fontSize: "17px",
    lineHeight: "24px",
    color: "#202225",
  }),
  indicatorSeparator:(provided, state) => ({
    ...provided,
    display:"none",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen && "rotate(180deg)"
  }),
};

export const Select = styled.select`
  width: 100%;
  height: 54px;
  padding: 0 24px;

  border: 1px solid #dce0ec;
  box-sizing: border-box;

  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
  border-radius: 8px;
  appearance: none;
  background: url(${angleDown});
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 14px;
  background-size: 24px 24px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  color: #202225;

  &:focus,
  &:hover {
    border: 1px solid #7297ff;

    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
    border-radius: 8px;

    background: url(${angleUp});
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 14px;
    background-size: 24px 24px;
  }
`;

export const SelectTitle = styled.label`
  margin-bottom: 16px;

  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: #000000;
`;
