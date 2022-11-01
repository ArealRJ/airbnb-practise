import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex=0 } = props;
  const contentRef = useRef();

  useEffect(() => {
    // 当前需要移动元素
    const selectItemEl = contentRef.current.children[selectIndex];
    const itemLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;
    // content元素
    const contentWidth = contentRef.current.clientWidth; // content元素的宽度
    const contentScroll = contentRef.current.scrollWidth;
    const totalDistance = contentScroll - contentWidth; // content元素总共可以移动的距离

    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5; // 需要移动的距离

    if (distance < 0) distance = 0;  // 当distance小于0时，移动到0的位置
    if (distance > totalDistance) distance = totalDistance; // 当distance大于totalDistance时，移动到最大距离的位置

    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
