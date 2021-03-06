import styled from "styled-components";
import angleDown from "media/angle-down.svg";
import angleUp from "media/angle-up.svg";

export const customStyles = {
  control: (provided: any) => ({
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
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen && "rotate(180deg)",
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

  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.fontStyleNormal};
  font-weight: ${({ theme }) => theme.fonts.fontWeightNormal};
  font-size: ${({ theme }) => theme.fonts.fontSize17};
  line-height: ${({ theme }) => theme.fonts.lineHeight141};
  color: ${({ theme }) => theme.colors.baseColor};

  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.accentColor};

    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
    border-radius: 8px;

    background: url(${angleUp});
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 14px;
    background-size: 24px 24px;
  }
`;

export const SelectTitle = styled.div`
  margin-bottom: 16px;
`;
