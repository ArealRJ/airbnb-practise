import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: ${(props) => props.itemWidth};
  padding: 8px;
  box-sizing: border-box;
  flex-shrink: 0;
  
  .inner {
    width: 100%;
    .cover {
      position: relative;
      width: 100%;
      padding: 66.6% 8px 0;
      border-radius: 3px;
      overflow-hidden;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        @apply cursor-pointer;

      }
    }
    .desc {
      padding-top: 8px;
      color: ${(props) => props.verifyColor};
      font-size: 12px;
      @apply cursor-pointer;
    }
    .name {
      overflow: hidden; 
      text-overflow: ellipsis;
      display: -webkit-box; 
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; 
      color: ${(props) => props.theme.textColor.primaryColor};
      font-weight: 800;
      font-size: 16px;
      @apply cursor-pointer;
    }
    .price {
      color: ${(props) => props.verifyColor};
      font-size: 14px;
    }

    .star {
      font-size: 12px;
      color: ${(props) => props.theme.textColor.primaryColor};
      display: flex;
      align-items: center;
      .count {
      margin-left: 4px;
      display: flex;
      align-items: center;
      }
      .circle {
      margin: 0 3px;
      display: flex;
      align-items: center;
      }
      .bottom-info{
      display: flex;
      align-items: center;
      }
    }
  }
`;
