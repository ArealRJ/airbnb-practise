import React, { memo, useState } from "react";
import { CSSTransition } from "react-transition-group";

import IconSearch from "@/assets/svg/icon-search";
import SearchTabs from "./c-cpns/search-tabs";
import { CenterWrapper } from "./style";
import SearchTitles from "@/assets/data/search_titles";
import SearchSections from "./c-cpns/search-sections";

const HeaderCenter = memo((props) => {
  const { searchBarClick, isSearch } = props;

  const [tabIndex, setTabIndex] = useState(0);
  const titles = SearchTitles.map((item) => item.title);

  function searchBarClickHandle() {
    if (searchBarClick) searchBarClick();
  }

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchBarClickHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearch />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-details">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

export default HeaderCenter;
