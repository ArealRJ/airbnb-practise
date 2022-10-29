import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { BrowserWrapper } from "./style";
import IconClose from "../../assets/svg/icon-close";
import IconLeftArrow from "@/assets/svg/icon-left-arrow.";
import IconRightArrow from "@/assets/svg/icon-right-arrow";

const PictureBrowser = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
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

  return (
    <BrowserWrapper isNext={isNext}>
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
      <div className="preview"></div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
};

export default PictureBrowser;
