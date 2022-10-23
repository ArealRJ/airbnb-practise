import PropTypes from "prop-types";
import React, { memo } from "react";
import Rating from "@mui/material/Rating";

import { ItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { itemData,itemWidth = '25%' } = props;

  return (
    <ItemWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"} itemWidth={itemWidth}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="room" />
        </div>
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
