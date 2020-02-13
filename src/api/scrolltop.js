/**
 * @description 子元素滚动到父元素中间
 * @param {Vue | Element | Vue[] | Element[]|HTMLElement} element
 * @param {Object} operateChild
 */
const scrollToMiddle = (element, operateChild) => {
  const clearTimer = () => {
    clearInterval(operateChild.timerId);
    operateChild.timerId = null;
  };
  const getMaxScrollTop = () => {
    let sum = 0;
    for (let j = 0; j < element.children.length; j++) {
      sum += element.children[j].offsetHeight;
    }
    return sum - element.offsetHeight;
  };
  if (operateChild.timerId) { return clearTimer(); }
  operateChild.timerId = null;
  const maxScrollTop = getMaxScrollTop();
  const rate = 10;
  const { top, height } = operateChild.getBoundingClientRect();
  const distance = top - element.offsetHeight / 2 + height / 2;
  const to = distance + element.scrollTop;
  operateChild.timerId = setInterval(() => {
    const perTick = (to - element.scrollTop) / rate;
    if (distance <= 0 && element.scrollTop <= 0) {
      element.scrollTop = 0;
      return clearTimer();
    }
    if (distance >= 0 && element.scrollTop >= maxScrollTop) {
      element.scrollTop = maxScrollTop;
      return clearTimer();
    }
    if (Math.abs(perTick) < 1) {
      clearTimer();
      element.scrollTop = to;
      return;
    }
    element.scrollTop = element.scrollTop + perTick;
  }, 10);
};

export default scrollToMiddle;
