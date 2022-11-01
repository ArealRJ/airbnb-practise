import React, { memo } from "react";

import { HeaderWrapper } from "./style";
import HeaderLeft from "./c-cpns/header-left/index";
import HeaderCenter from "./c-cpns/header-center/index";
import HeaderRight from "./c-cpns/header-right/index";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";

const AppHeader = memo(() => {
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed } = headerConfig;
  return (
    <HeaderWrapper className={classNames({ isFixed: isFixed })}>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default AppHeader;
