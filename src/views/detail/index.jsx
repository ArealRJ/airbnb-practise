import React, { memo } from "react";
import { DetailWrapper } from "./style";
import DetailPictures from "./c-cpns/detail-pictures/index";
import DetailInfo from "./c-cpns/detail-info/index";

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfo />
    </DetailWrapper>
  );
});

export default Detail;
