import React from "react";
import * as Styled from "./TableHeadStyles";
import angleDown from "media/angle-down.svg";

const TableHead = () => {
  return (
    <Styled.Thead>
      <Styled.Tr>
        <Styled.Th>
          <Styled.TextWrapper>
            First name <img src={angleDown} alt="" />
          </Styled.TextWrapper>
        </Styled.Th>
        <Styled.Th>
          <Styled.TextWrapper>
            Last name <img src={angleDown} alt="" />
          </Styled.TextWrapper>
        </Styled.Th>
        <Styled.Th>Resolution</Styled.Th>
        <Styled.Th>
          <Styled.TextWrapper>
            Visit Date <img src={angleDown} alt="" />
          </Styled.TextWrapper>
        </Styled.Th>
        <Styled.Th>
          <Styled.TextWrapper>
            Next Visit <img src={angleDown} alt="" />
          </Styled.TextWrapper>
        </Styled.Th>
        <Styled.MoreTh>Actions</Styled.MoreTh>
      </Styled.Tr>
    </Styled.Thead>
  );
};

export default TableHead;
