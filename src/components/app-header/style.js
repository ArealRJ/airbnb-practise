// import styled from "styled-components";

// export const HeaderWrapper = styled.div`
//   /* display: flex; */
//   /* align-items: center; */
//   /* font-size: 14px;
//   font-weight: 600;
//   border-bottom: 1px solid #eee; */
//   z-index: 99;
//   &.isFixed {
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//   }

//   .top {
//     position: relative;
//     transition: all 250ms ease;
//     /* background-color: #fff; */
//     z-index: 99999;
//     width: 100%;
//     /* border: 1px solid #eee; */
//     /* padding: 0 24px; */

//     .content {
//       z-index: 99999999;
//       display: flex;
//       height: 80px;
//       align-items: center;
//       background-color: ${(props) =>
//         props.theme.isAlpha ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};
//       border-bottom: 1px solid #eee;
//       border-bottom-color: ${(props) =>
//         props.theme.isAlpha ? "rgba(233,233,233,0)" : "rgba(233,233,233,1)"};
//     }
//     /* .search-area {
//       height: 100px;
//     } */
//   }

//   .cover {
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: rgba(0, 0, 0, 0.5);
//     width: 100%;
//     height: 100%;
//     z-index: 99;
//   }
// `;

// export const SearchAreaWrapper = styled.div`
//   transition: height 250ms ease;
//   height: ${(props) => (props.isSearch ? "100px" : 0)};
//   z-index: 9999;
// `;
import styled from "styled-components"


export const HeaderWrapper = styled.div`

  &.isFixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    z-index: 999999;
    transition: all 250ms ease;
    background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,0)": "rgba(255,255,255,1)"};
    border-bottom: 1px solid #eee;
    border-bottom-color: ${props => props.theme.isAlpha ? "rgba(233,233,233,0)": "rgba(233,233,233,1)"};

    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }

  .cover {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.3);
  }
`

export const SearchAreaWrapper = styled.div`
  transition: height 250ms ease;
  height: ${props => props.isSearch ? "100px": "0"};
`
