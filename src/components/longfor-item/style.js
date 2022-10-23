import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 20%;
  flex-shrink: 0;
  .inner {
    position: relative;
    padding: 8px;
    display: flex;
    justify-content: center;
  }
  .cover {
    position: relative;
    height: 100%;
    border-radius: 3px;
    /* z-index: 2; */
  }
  .bg-cover {
    position: absolute;
    background-image: linear-gradient(-180deg, rgba(0,0,0,0) 3%, rgb(0,0,0) 100%);
    width: 92%;
    height: 50%;
    left: 8px;
    bottom:8px;
  }
  .info {
    position: absolute;
    display: flex;
    top: 70%;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    .city {
      text-align: center;
    } 
    .price {
      text-align: center;
    }
  }
`;
