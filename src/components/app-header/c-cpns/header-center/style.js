import styled from "styled-components";

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;
  .search-bar {
    position: absolute;
    display: flex;
    align-items: center;
    width: 300px;
    height: 48px;
    border: 1px solid #dddddd;
    border-radius: 24px;
    margin: -1px;
    padding: 0 0 0 8px;
    cursor: pointer;
    
    ${(props) => props.theme.mixin.boxShadow}
    .text {
      width: 251px;
      height: 18px;
      padding: 0 16px;
      line-height: 18px;
      color: ${(props) => props.theme.textColor.secondaryColor};
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 100%;
      background-color: ${(props) => props.theme.color.primaryColor};
      color: #ffffff;
      padding: 10px;
    }
  }
  .search-details {
    position: relative;
    transform-origin: 50% 0;
    will-change: transform, opacity;
    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .detail-exit {
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`;
