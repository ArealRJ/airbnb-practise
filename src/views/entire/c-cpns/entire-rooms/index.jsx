import React, { memo } from "react";
import { RoomsWrapper } from "./style";
import { useSelector, shallowEqual } from "react-redux";

import RoomItem from "@/components/room-item";

const EntireRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );

  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多处住宿</h2>
      <div className="room-list">
        {roomList.map((item, index) => {
          return (
            <RoomItem itemData={item} itemWidth="20%" key={item._id}></RoomItem>
          );
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

export default EntireRooms;
