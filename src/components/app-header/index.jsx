import React, { memo } from "react";

import { HeaderWrapper } from "./style";
import HeaderLeft from "./c-cpns/header-left/index";
import HeaderCenter from "./c-cpns/header-center/index";
import HeaderRight from "./c-cpns/header-right/index";

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default AppHeader;
