const formatNumber = (num) =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
export default formatNumber;

// 1689042 views => 1.689.042 views로 변환
