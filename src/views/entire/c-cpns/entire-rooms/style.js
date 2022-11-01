import styled from "styled-components";

export const RoomsWrapper = styled.div`
  padding: 40px 20px;
  position: relative;
  margin-top: 118px;
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

  > .cover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255,0.8);
  }
`;
