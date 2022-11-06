import React, { memo, useRef, useState } from "react";
import classNames from "classnames";
import { shallowEqual, useSelector } from "react-redux";

import { HeaderWrapper, SearchAreaWrapper } from "./style";
import useScrollPosition from "@/hooks/useScrollPosition";
import HeaderLeft from "./c-cpns/header-left/index";
import HeaderCenter from "./c-cpns/header-center/index";
import HeaderRight from "./c-cpns/header-right/index";
import { ThemeProvider } from "styled-components";

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false);

  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed,topAlpha } = headerConfig;

  const { scrollY } = useScrollPosition();
  // 记录滚动的状态，来控制是否显示搜索框
  const prevY = useRef(0);
  if (!isSearch) prevY.current = scrollY;
  if (isSearch && Math.abs(scrollY - prevY.current > 30)) setIsSearch(false);

  // 控制app-header透明度
  const isAlpha = topAlpha && scrollY === 0;


  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ isFixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={(e) => setIsSearch(true)}
            />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
        </div>
        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
