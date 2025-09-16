function debounce(fn, delay) {
  let timerId;
  function debounced(...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
  return debounced;
}
export default debounce;
