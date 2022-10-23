import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @apply mt-3;
  @apply mb-20;
  .info {
    .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
      background-color: ${(props) => props.theme.textColor.secondaryColor};
      color: #fff;
    }
    .MuiPaginationItem-page {
      margin: 0 9px;
      &:hover {
        text-decoration: underline;
      }
    }
    .MuiPaginationItem-icon {
      font-size: 24px;
    }
  }
  .desc {
    @apply mt-4;
    color: ${(props) => props.theme.textColor.secondaryColor};
  }
`;
