import React, { memo, useEffect } from "react";
import { DetailWrapper } from "./style";
import DetailPictures from "./c-cpns/detail-pictures/index";
import DetailInfo from "./c-cpns/detail-info/index";
import AppHeader from "@/components/app-header";
import { useDispatch } from "react-redux";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Detail = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false }));
  }, [dispatch]);

  return (
    <DetailWrapper>
      <AppHeader />
      <DetailPictures />
      <DetailInfo />
    </DetailWrapper>
  );
});

export default Detail;
