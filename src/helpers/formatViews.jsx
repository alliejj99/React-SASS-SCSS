const formatView = (num) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(0) + "K"; // 100만
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(0) + "M"; // 10만
  } else if (num < 900) {
    return num;
  }
};
export default formatView;
