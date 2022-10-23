import styled from "styled-components";

export const FooterWrapper = styled.div`
  font-size: 16px;
  display: flex;
  margin-top: 20px;
  color:${props => props.color};
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  .text {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;
