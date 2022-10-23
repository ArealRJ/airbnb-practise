
import styled from 'styled-components';

export const CenterWrapper = styled.div`
  .search-bar{
    display: flex;
  align-items: center;
  width: 300px;
  height: 48px;
  border: 1px solid #DDDDDD;
  border-radius: 24px;
  margin: -1px;
  padding: 0 0 0 8px;
  cursor: pointer;
  ${props => props.theme.mixin.boxShadow}
  .text{
    width: 251px;
    height:18px;
    padding: 0 16px;
    line-height: 18px;
    color:${props => props.theme.textColor.secondaryColor};
  }

  .icon{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: ${props => props.theme.color.primaryColor};
    color:#ffffff ;
    padding: 10px;
  }
  }
`