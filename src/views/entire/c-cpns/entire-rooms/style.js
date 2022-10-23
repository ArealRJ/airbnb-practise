import styled from "styled-components";

export const RoomsWrapper = styled.div`
  padding: 40px 20px;
  .title {
    font-size: 22px;
    color: ${(props) => props.theme.textColor.secondaryColor};
    font-weight: 600;
    padding: 5px;
  }
  .room-list {
    display: flex;
    flex-wrap: wrap;
  }
`;
