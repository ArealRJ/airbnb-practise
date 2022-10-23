import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 1032px;
  /* height:94px; */
  display: flex;
  color:${props => props.theme.textColor.secondaryColor};
  margin-top:24px;
  margin-bottom: 12px;
  .header-title {
    /* height: 62px; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 0 8px;
    .sub-title{
      margin:12px 0 12px;
      font-size: 16px;
      color:{props => props.theme.textColor.secondaryColor};
    }
  }
`

