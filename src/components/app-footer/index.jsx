import React, { memo } from "react";

import footerData from "@/assets/data/footer.json";
import { FooterWrapper } from "./style";

const AppFooter = memo(() => {
  const renderLiItem = (listItem, index) => {
    return (
      <li className="link" key={index}>
        <span className="f14">
          {listItem}
        </span>
      </li>
    );
  }
  return (
    <FooterWrapper>
      <div className="content">
        {footerData.map((item, index) => {
          return (
            <div className="list" key={item.name}>
              <div className="f14">{item.name}</div>
              <ul className="list-item">
                {item.list.map(renderLiItem)}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="statement">
          © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 ·
          全国旅游投诉渠道 12301
        </div>
    </FooterWrapper>
  );
});

export default AppFooter;
