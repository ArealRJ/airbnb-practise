import React, { memo, useRef, useState, useEffect } from "react";

import { ScrollViewWrapper } from "./style";
import IconLeftArrow from "@/assets/svg/icon-left-arrow.";
import IconRightArrow from "@/assets/svg/icon-right-arrow";
import classNames from "classnames";

const ScrollView = memo((props) => {
  const [posIndex, setPosIndex] = useState(0);
  const [rightBtnShow, setRightBtnShow] = useState(true);
  const [leftBtnShow, setLeftBtnShow] = useState(false);
  const scrollContentRef = useRef();
  const totalDistanceRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
  }, [props.children]);

  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const currentLeftEl = scrollContentRef.current.children[newIndex];
    const scrollDistance = currentLeftEl.offsetLeft;
    scrollContentRef.current.style.transform = `translateX(-${scrollDistance}px)`;
    setPosIndex(newIndex);
    setRightBtnShow(totalDistanceRef.current > scrollDistance); // 当前滚动距离小于总距离时，显示右侧按钮
    setLeftBtnShow(scrollDistance > 0); // 当前滚动距离大于0时，显示左侧按钮
  }

  const [rightBtnDown, setRightBtnDown] = useState(false);
  const [leftBtnDown, setLeftBtnDown] = useState(false);

  return (
    <ScrollViewWrapper>
      {leftBtnShow && (
        <button
          className={classNames("control left", { mouseDown: leftBtnDown })}
          onClick={(e) => controlClickHandle(false)}
          onMouseDown={(e) => setLeftBtnDown(true)}
          onMouseUp={(e) => setLeftBtnDown(false)}
        >
          <IconLeftArrow />
        </button>
      )}
      {rightBtnShow && (
        <button
          className={classNames("control right", { mouseDown: rightBtnDown })}
          onClick={(e) => controlClickHandle(true)}
          onMouseDown={(e) => setRightBtnDown(true)}
          onMouseUp={(e) => setRightBtnDown(false)}
        >
          <IconRightArrow />
        </button>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;
