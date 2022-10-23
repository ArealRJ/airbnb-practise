import PropTypes from "prop-types";
import React, { memo } from "react";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";
import { SectionWrapper } from "./style";

const HomeV1Section = memo((props) => {
  const { infoData } = props;
  return (
    <SectionWrapper>
      <SectionHeader title={infoData?.title} subTitle={infoData?.subtitle} />
      <SectionRooms roomList={infoData?.list} itemWidth="25%" />
      <SectionFooter />
    </SectionWrapper>
  );
});

HomeV1Section.propTypes = {
  infoData: PropTypes.object,
};

export default HomeV1Section;
