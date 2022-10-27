// import PropTypes from 'prop-types'
import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([]);

  function itemClickHandle(name) {
    const newItems = [...selectItems];
    if (newItems.includes(name)) {
      newItems.splice(newItems.indexOf(name), 1);
    } else {
      newItems.push(name);
    }
    setSelectItems(newItems);
  }

  return (
    <FilterWrapper>
      {filterData.map((item, index) => {
        return (
          <div
            className={classNames("filter-item", {
              active: selectItems.includes(item),
            })}
            key={index}
            onClick={(e) => itemClickHandle(item)}
          >
            {item}
          </div>
        );
      })}
    </FilterWrapper>
  );
});

// EntireFilter.propTypes = {}

export default EntireFilter;
