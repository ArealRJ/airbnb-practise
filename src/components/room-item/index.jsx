import PropTypes from "prop-types";
import React, { memo, useState, useRef } from "react";
import Rating from "@mui/material/Rating";
import { Carousel } from "antd";

import { ItemWrapper } from "./style";
import IconLeftArrow from "@/assets/svg/icon-left-arrow.";
import IconRightArrow from "@/assets/svg/icon-right-arrow";
import classNames from "classnames";
import Indicator from "@/base-ui/indicator";
import throttle from "@/utils/throttle";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const sliderRef = useRef();

  function toggleItemClick(isRight = true) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev();
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1;
    if (newIndex >= itemData.picture_urls.length) newIndex = 0;
    setSelectIndex(newIndex);
  }

  // 节流
  const throttleToggleItemClick = throttle(toggleItemClick, 300);

  function itemClickHandle() {
    if (itemClick) itemClick(itemData);
    
  }

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="room" />
    </div>
  );

  const swipeElement = (
    <div className="swipe">
      <div className="control">
        <div
          className="btn left"
          onClick={(e) => throttleToggleItemClick(false)}
        >
          <IconLeftArrow width={25} height={25} />
        </div>
        <div
          className="btn right"
          onClick={(e) => throttleToggleItemClick(true)}
        >
          <IconRightArrow width={25} height={25} />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span
                  className={classNames("dot", {
                    active: index === selectIndex,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item, index) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />;
            </div>
          );
        })}
      </Carousel>
    </div>
  );
  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={(e) => itemClickHandle(itemData)}
    >
      <div className="inner">
        {itemData.picture_urls ? swipeElement : pictureElement}
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name" title={itemData.name}>
          {itemData.name}
        </div>
        <div className="price">{itemData.price_format + "/晚"}</div>
        <div className="star">
          <Rating
            name="read-only"
            sx={{ fontSize: "12px", color: "#1a8488", lineHeight: "21px" }}
            value={itemData.star_rating ?? 4.5}
            precision={0.5}
            readOnly
          />
          <div className="count">{itemData.reviews_count}</div>
          {itemData.bottom_info?.content && <div className="circle">·</div>}
          <div className="bottom-info">{itemData.bottom_info?.content}</div>
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
