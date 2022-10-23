import React, { memo } from "react";
import { RoomsWrapper } from "./style";
import { useSelector } from "react-redux";
import RoomItem from "@/components/room-item";

const EntireRooms = memo(() => {
  const { roomList, totalCount } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
  }));

  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多处住宿</h2>
      <div className="room-list">
        {roomList.map((item, index) => {
          return (
            <RoomItem itemData={item} itemWidth="20%" key={item.id}></RoomItem>
          );
        })}
      </div>
    </RoomsWrapper>
  );
});

export default EntireRooms;
