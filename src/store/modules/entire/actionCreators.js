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

export function changeIsLoadingAction(isLoading) {
  return {
    type: actionTypes.CHANGE_IS_LOADING,
    isLoading,
  };
}

export const fetchRoomListAction = (page = 0) => {
  return async (dispatch) => {
    // 回到顶部
    window.scrollTo(0, 0);
    // 0.更新当前页码
    dispatch(changeCurrentPageAction(page));

    // 1. 发送网络请求
    // const currentPage = getState().entire.currentPage;
    dispatch(changeIsLoadingAction(true));
    const res = await getEntireRoomList(page * 20);
    dispatch(changeIsLoadingAction(false));

    const roomList = res.list;
    const totalCount = res.totalCount;
    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));

    // dispatch(changeTotalCountAction(res.data.totalCount));
  };
};
