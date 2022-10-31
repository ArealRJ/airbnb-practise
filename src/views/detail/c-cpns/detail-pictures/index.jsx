import React, { memo, useState } from "react";
import { useSelector } from "react-redux";

import PictureBrowser from "@/base-ui/picture-browser";
import { PicturesWrapper } from "./style";
import { Button } from "antd";

const DetailPictures = memo((props) => {
  const [showBrowser, setShowBrowser] = useState(false);

  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo,
  }));

  function btnClickHandle() {
    setShowBrowser(true);
  }

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={btnClickHandle}>
            <img src={detailInfo.picture_urls[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo.picture_urls.slice(1, 5).map((item) => {
            return (
              <div className="item" key={item} onClick={btnClickHandle}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="show-btn">
        <Button
          type="text"
          className="btn text-black"
          style={{ borderRadius: "6px" }}
          onClick={btnClickHandle}
        >
          显示图片
        </Button>
      </div>
      {showBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo.picture_urls}
          closeClick={(e) => setShowBrowser(false)}
        />
      )}
    </PicturesWrapper>
  );
});


export default DetailPictures;
