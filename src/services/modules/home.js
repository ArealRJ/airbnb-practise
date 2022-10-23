import $request from "..";

export const getHomeGoodPriceData = () => {
  return $request.get({
    url: "/home/goodprice",
  });
};

export const getHomeHighScoreData = () => {
  return $request.get({
    url: "/home/highscore",
  });
};

export const getHomeDiscountData = () => {
  return $request.get({
    url: "/home/discount",
  });
};

export const getHotRecommendData = () => {
  return $request.get({
    url: "/home/hotrecommenddest",
  });
};

export const getHomeLongForData = () => {
  return $request.get({
    url: "/home/longfor",
  });
};

export const getHomePlusData = () => {
  return $request.get({
    url: "/home/plus",
  });
};
