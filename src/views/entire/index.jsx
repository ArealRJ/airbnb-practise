import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { EntireWrapper } from "./style";
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";
import EntireFilter from "./c-cpns/entire-filter";
import EntireRooms from "./c-cpns/entire-rooms/index";
import EntirePagination from "./c-cpns/entire-pagination/index";
import AppHeader from "@/components/app-header";
import { changeHeaderConfigAction } from "@/store/modules/main";

const footer = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoomListAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }));
  }, [dispatch]);

  return (
    <EntireWrapper>
      <AppHeader />
      <div className="section-filter">
        <EntireFilter />
      </div>
      <div className="rooms">
        <EntireRooms />
      </div>
      <div className="pagination">
        <EntirePagination />
      </div>
    </EntireWrapper>
  );
});

export default footer;
