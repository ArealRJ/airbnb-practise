import * as actionTypes from "./constants";
import { getEntireRoomList } from "@/services";

export function changeCurrentPageAction(currentPage) {
  return {
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage,
  };
}

export function changeRoomListAction(roomList) {
  return {
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList,
  };
}

export function changeTotalCountAction(totalCount) {
  return {
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount,
  };
}

export const fetchRoomListAction = (page = 0) => {
  return async (dispatch) => {
    // 0.更新当前页码
    dispatch(changeCurrentPageAction(page));
    
    // 1. 发送网络请求
    // const currentPage = getState().entire.currentPage;
    const res = await getEntireRoomList(page * 20);

    const roomList = res.list;
    const totalCount = res.totalCount;
    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));

    // dispatch(changeTotalCountAction(res.data.totalCount));
  };
};
