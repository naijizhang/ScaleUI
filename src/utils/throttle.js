function throttle(fn, interval) {
  let lastTime = 0;

  function throttled(...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      fn.apply(this, args);
      lastTime = now;
    }
  }
  return throttled;
}
export default throttle;
