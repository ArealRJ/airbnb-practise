// 节流

export default function throttle(fn, delay = 2000) {
  console.log('throttle初始化');
  let last;
  let timer;
  return function (...args) {
    console.log(last);
    let now = new Date().getTime();
    if (last && now - last >= delay) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(this, args);
      }, delay);
    } else {
      console.log(last);
      fn.apply(this, args);
    }
  };
}
