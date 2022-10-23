import styled from "styled-components";

export const TabsWrapper = styled.div`
  .tab-item {
    display: flex;
    flex-basis: 120px;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    height: 48px;
    font-size: 17px;
    padding: 14px 16px;
    border: solid 0.5px #D8D8D8 ;
    border-radius: 3px ;
    background: #ffffff ;
    white-space: nowrap;
    box-sizing: border-box ;
    box-shadow: 0px 2px 2px rgb(0 0 0 / 15%);
    margin-right: 16px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};
    color:${props => props.theme.textColor.primaryColor};
    &:last-child {
      margin-right: 0;
    }
  }
  .active {
    color: #fff;
    background-color: #1b848a;
  }
`;
