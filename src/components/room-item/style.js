import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: ${(props) => props.itemWidth};
  padding: 8px;
  box-sizing: border-box;
  flex-shrink: 0;
  
  .inner {
    width: 100%;
    .swipe{
      position: relative;
      height: 100%;
      &:hover{
        cursor: pointer;
        .control {
          color: #fff;
          height: 100%;
          position: absolute;
          width: 100%;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 10;
          .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
            width: 50px;
      &.right {
        background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }
        }
        
      }
      .control{
      display: none;
    }
    .indicator{
          position: absolute;
          width: 30%;
          height: 10px;
          bottom: 10px;
          left:0;
          right: 0;
          margin: 0 auto;
          z-index: 9999;
          .item{
            width: 14.29%;
            display:flex;
            justify-content: center;
            align-items: center;
            
            .dot{
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background-color: #fff;
              &.active{
                width: 8px;
                height: 8px;
                background-color: red;
              }
            }
            
          }
        }
    }
    
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
        object-fit: cover;

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
