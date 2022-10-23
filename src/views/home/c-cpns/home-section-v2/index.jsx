import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";

import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";
import SectionTabs from "@/components/section-tabs/index";

const HomeV2Section = memo((props) => {
  
  const { infoData } = props;
  const initialName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initialName);
  
  // 给子组件传递函数时，需要使用useCallback包裹，进行性能优化
  const changeTabsClick = useCallback((name) => {
    setName(name);
  }, []);

  const tabNames = infoData.dest_address?.map((item) => item.name);

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData?.subtitle} />
      <SectionTabs
        tabNames={tabNames}
        changeTabHandle={(name) => changeTabsClick(name)}
      ></SectionTabs>
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33333%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  );
});

HomeV2Section.propTypes = {
  infoData: PropTypes.object,
};

export default HomeV2Section;
