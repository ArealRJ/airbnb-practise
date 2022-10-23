import React, { memo } from "react";
import PropTypes from "prop-types";

import { FooterWrapper } from "./style";
import IconMoreInfo from "@/assets/svg/icon-more-info";
import { useNavigate } from "react-router-dom";
const SectionFooter = memo((props) => {
  const { name } = props;
  let showMessage = "显示全部";
  if (name) {
    showMessage = `查看更多${name}房源`;
  }
  const navigate = useNavigate();
  function moreClickHandle() {
    navigate("/entire");
  }

  return (
    <FooterWrapper color={name ? "#008489" : "#000"}>
      <div className="text" onClick={moreClickHandle}>
        <div>{showMessage}</div>
        <IconMoreInfo />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
