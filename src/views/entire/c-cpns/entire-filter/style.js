import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: fixed;
  top: 80px;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  z-index:9;
  background-color: #fff;
  .filter-item {
    height: 32px;
    padding: 6px 12px;
    font-size: 14px;
    color: ${(props) => props.theme.textColor.primaryColor};
    border: 1px solid #dce0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    margin:0 8px;
    &.active {
      background-color: #1b8489;
      color: #fff;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
