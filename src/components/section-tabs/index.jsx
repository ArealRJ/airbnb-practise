import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import classNames from "classnames";

import { TabsWrapper } from "./style";
import ScrollView from "@/base-ui/scroll-view";

const SectionTabs = memo((props) => {
  const { tabNames = [], changeTabHandle } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  function itemClickHandle(name, index) {
    setCurrentIndex(index);
    changeTabHandle(name);
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <button
              className={classNames("tab-item", { active: currentIndex === index })}
              key={item}
              onClick={(e) => itemClickHandle(item, index)}
            >
              {item}
            </button>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
