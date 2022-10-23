import  styled  from 'styled-components';

export const FooterWrapper = styled.div`
width:100%
height:371px;
border-top:1px solid #d3d3d3;

.content{
  width: 1080px;
  margin: 0 auto;
  padding: 48px 24px;
  display: flex;

  .list{
    width: 242px;
    font-size: 14px;
    .list-item{
      margin-top: 16px;
      
      .link{
        display: block;
        color: #767676;
        height: 18px;
        line-height: 18px;
        margin-bottom: 4px;
        cursor: pointer;
        span:hover{
          border-bottom: 1px solid #ddd;
        }
      }
    }
  }


}

.statement{
  width: 1080px;
  margin: 0 auto;
  color: #767676;
  padding: 0 24px
}
`