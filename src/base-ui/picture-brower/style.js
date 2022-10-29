import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
  display: flex;
  flex-direction: column;
  .top {
    height: 86px;
    display: flex;
    justify-content: flex-end;
    .close-btn {
      width: 84px;
      height: 52px;
      display: flex;
      align-items: center;
      @apply justify-center;
      cursor: pointer;
    }
  }

  .slider {
    display: flex;
    flex: 1;
    justify-content: center;
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
      }
    }

    .container {
      position: relative;
      height: 100%;
      width: 100%;
      overflow: hidden;
      max-width: 105vh;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

      .pic-enter {
        transform: translate(${(props) => (props.isNext ? "100%" : "-100%")});
        opacity: 0;
      }
      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }
      .pic-exit {
        opacity: 1;
      }
      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }

  .preview {
    height: 100px;
  }
`;
