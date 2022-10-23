import React, { memo, useEffect, useState } from "react";

import { RightWrapper } from "./style";
import IconLanguage from "@/assets/svg/icon_language";
import IconMenu from "@/assets/svg/icon-menu";
import IconAvatar from "@/assets/svg/icon-avatar";

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  const windowHandleClick = () => { 
    setShowPanel(false);
  };
  useEffect(() => {
    window.addEventListener("click", windowHandleClick);
    return () => {
      window.removeEventListener("click", windowHandleClick);
    };
  }, []);


  function panelShowHandle(event) {
    window.addEventListener("click", windowHandleClick);
    // 阻止冒泡;
    event.stopPropagation();
    setShowPanel(!showPanel);
  }
  return (
    <RightWrapper>
      <div className="btns ">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconLanguage />
        </span>
      </div>
      <button className="profile" onClick={panelShowHandle}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="panel-item">注册</div>
              <div className="panel-item">登录</div>
            </div>
            <div className="bottom">
              <div className="panel-item">出租房源</div>
              <div className="panel-item">开展体验</div>
              <div className="panel-item">帮助</div>
            </div>
          </div>
        )}
      </button>
    </RightWrapper>
  );
});

export default HeaderRight;
