import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeBanner from "./c-cpns/home-banner/index";
import HomeV1Section from "./c-cpns/home-section-v1";
import HomeV2Section from "./c-cpns/home-section-v2";
import { fetchHomeDataAction } from "@/store/modules/home";
import isEmptyObject from "@/utils/isEmptyObject";
import { HomeWrapper } from "./style";
import LongFor from "./c-cpns/home-longfor";
import HomeSectionV3 from "./c-cpns/home-section-v3";

const Home = memo(() => {
  // redux获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotRecommendInfo,
    longForInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );
  // 派发异步事件
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣相关 */}
        {isEmptyObject(discountInfo) && (
          <HomeV2Section infoData={discountInfo} />
        )}
        {/* 热门推荐 */}
        {isEmptyObject(hotRecommendInfo) && (
          <HomeV2Section infoData={hotRecommendInfo} />
        )}
        {/* 高性价比相关 */}
        {isEmptyObject(goodPriceInfo) && (
          <HomeV1Section infoData={goodPriceInfo} />
        )}
        {/* 高评分相关 */}
        {isEmptyObject(highScoreInfo) && (
          <HomeV1Section infoData={highScoreInfo} />
        )}
        {/*  */}
        {isEmptyObject(longForInfo) && <LongFor infoData={longForInfo} />}
        {/* plus */}
        {isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
