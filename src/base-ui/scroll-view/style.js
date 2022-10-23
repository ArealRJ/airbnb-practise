import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;
  width: 100%;
  .scroll{
    overflow: hidden;
    .scroll-content {
      display: flex;
      width: 100%;
      transition: transform 300ms ease;
    }
  }
  /* .left-btn {
    position: relative;
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    margin-top: -14px;
    left: -18px;
    z-index: 100;
    border: 1px solid #eee;
  }
  .right-btn {
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    margin-top: -14px;
    right: -18px;
    z-index: 100;
    border: 1px solid #eee;
  } */
  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    cursor: pointer;

    &.mouseDown {
      border: 1px solid #000;
    }

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
`;
