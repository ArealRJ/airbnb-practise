import React, { memo, useState } from "react";
import Indicator from "@/base-ui/indicator/index";

const Demo = memo(() => {
  const [selectIndex, setSelectIndex] = useState(0);
  const numbers = [123, 345, 789, 321, 654, 987];

  function toggleItemClick(isNext) {
    if (selectIndex >= numbers.length - 1 && isNext) setSelectIndex(0);
    else if (selectIndex <= 0 && !isNext) setSelectIndex(numbers.length - 1);
    else {
      isNext
        ? setSelectIndex(selectIndex + 1)
        : setSelectIndex(selectIndex - 1);
    }
  }


  return ( 
    <div>
      <div>
        <button onClick={(e) => toggleItemClick(false)}>上一个</button>
        <button onClick={(e) => toggleItemClick(true)}>下一个</button>
      </div>
      <div className="w-16">
        <Indicator selectIndex={selectIndex}>
          {numbers.map((item, index) => {
            return (
              <button className="mr-1" key={item}>
                {item}
              </button>
            );
          })}
        </Indicator>
      </div>
    </div>
  );
});

export default Demo;
