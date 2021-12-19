import styled from "styled-components";

export const Wrapper = styled.div`
min-height: 400px;
  max-height: calc(100% - 210px);
  overflow: auto;

    &::-webkit-scrollbar {
      width: 12px;
    };
    &::-webkit-scrollbar-track {
      background: ${({ theme }) =>
        theme.colors.viewPagesContainerBackgroundColor};
      opacity: 0.32;
      border-radius: ${({ theme }) => theme.borderRadius.borderRadius};
    };
    &::-webkit-scrollbar-thumb {
      width: 12px;
      background: ${({ theme }) => theme.colors.inputBorderColor};
      opacity: 0.56;
      border-radius: ${({ theme }) => theme.borderRadius.borderRadius};
    };
  } ;
`;

export const Table = styled.table``;
