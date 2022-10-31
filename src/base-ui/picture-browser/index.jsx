import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import classNames from "classnames";

import { BrowserWrapper } from "./style";
import IconClose from "../../assets/svg/icon-close";
import IconLeftArrow from "@/assets/svg/icon-left-arrow.";
import IconRightArrow from "@/assets/svg/icon-right-arrow";
import Indicator from "../indicator";
import IconTriangleBottomArrow from "@/assets/svg/icon-triangle-bottom-arrow";
import IconTriangleTopArrow from "@/assets/svg/icon-triangle-top-arrow";


const PictureBrowser = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(true);
  const { pictureUrls, closeClick } = props;

  useEffect(() => {
    // 控制滚动条显示隐藏
    document.body.style = "overflow: hidden";
    return () => {
      document.body.style = "overflow: auto";
    };
  }, []);

  function closeClickHandle() {
    if (closeClick) closeClick();
  }

  function controlClickHandle(isNext) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length) newIndex = 0;
    setCurrentIndex(newIndex);
    setIsNext(isNext);
  }

  function bottomItemClick(index) {
    setIsNext(index > currentIndex);
    setCurrentIndex(index);
  }

  return (
    <BrowserWrapper isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <button
            className="left btn"
            onClick={(e) => controlClickHandle(false)}
          >
            <IconLeftArrow width="77" height="77" />
          </button>
          <button
            className="right btn"
            onClick={(e) => controlClickHandle(true)}
          >
            <IconRightArrow width="77" height="77" />
          </button>
        </div>
        <div className="container">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div>
              <span>
                {currentIndex + 1}/{pictureUrls.length}{" "}
              </span>
              <span>
                Superior Studio for 2 people, Tower Hill 图片{currentIndex + 1}
              </span>
            </div>
            <div className="show-list" onClick={(e) => setShowList(!showList)}>
              <span>{showList ? "隐藏" : "显示"}照片列表</span>
              <span>
                {showList ? (
                  <IconTriangleBottomArrow />
                ) : (
                  <IconTriangleTopArrow />
                )}
              </span>
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames("item", {
                      active: currentIndex === index,
                    })}
                    key={item}
                    onClick={(e) => bottomItemClick(index)}
                  >
                    <img src={item} alt="" />;
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
};

export default PictureBrowser;
