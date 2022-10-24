import React, { memo } from "react";
import Pagination from "@mui/material/Pagination";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { PaginationWrapper } from "./style";
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";

const EntirePagination = memo(() => {
  // 获取数据
  const { totalCount, currentPage } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
  }),shallowEqual);
  const dispatch = useDispatch();

  // 页面相关信息
  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = startCount + 19 > totalCount ? totalCount : startCount + 19;

  // 翻页
  function handleChange(event, pageCount) {

    dispatch(fetchRoomListAction(pageCount - 1));
  }
  return (
    <PaginationWrapper>
      <div className="info">
        <Pagination count={totalPage} onChange={handleChange} />
      </div>
      <div className="desc">
        第{startCount}-{endCount}个房源，共超过{totalCount}个
      </div>
      
    </PaginationWrapper>
  );
});

export default EntirePagination;
