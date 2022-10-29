import styled from 'styled-components';

export const RightWrapper = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
font-size: 14px;
font-weight: 500;
color: ${props => props.theme.textColor.primaryColor};
  .btns{
    display: flex;
    align-items: center;
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 58px;
      height: 42px;
      line-height: 42px;
      text-align: inherit;
      border-radius: 22px;
      cursor: pointer;
      transition: color 250ms ease;
      &:hover{
        background-color: #f7f7f7;
      }
      &:last-of-type {
        width: 46px;
        height: 42px;
        position: relative;
        left: -3px;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 77px;
    height: 42px;
    padding:5px 5px 5px 12px;
    border-radius: 21px;
    border: 1px solid #DDDDDD;
    box-shadow: none;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}

    &::after {
      position: absolute;
      content: '';
      width: 12px;
      height: 12px;
      border: 2px solid #fff;
      background-color: ${props => props.theme.color.primaryColor};
      border-radius: 100%;
      right:5px;
      top: 3px;
    }
    
    .panel{
      position: absolute;
      top: 52px;
      right: 0px;
      width: 240px;
      height: 243px;
      border-radius: 14px;
      border: 1px solid #DDDDDD;
      background-color: #ffffff;
      box-shadow: 0 0 2px 2px rgba(0,0,0,0.06);
      display: flex;
      flex-direction: column;
      z-index: 99;
      .top{
        width: 100%;
        height: 98px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        border-bottom: 1px solid #DDDDDD;
      }
      .bottom{
        width: 100%;
        height: 145px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        border-bottom: 1px solid #DDDDDD;
      }
      .panel-item{
        display: flex;
        align-items: center;
        font-size: 14px;
        padding: 0 18px;
        width: 100%;
        height:40px;
        &:hover{
          background-color: #f7f7f7;
        }
      }
    }
  }
`

