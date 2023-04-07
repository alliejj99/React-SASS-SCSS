import React from "react";
import useWindowSize from "../../helpers/useWindowSize";
import SmallSideBar from "./SmallSideBar";
import BigSideBar from "./BigSideBar";

const SideBar = () => {
  const { width } = useWindowSize();

  return (
    <React.Fragment>
      {/* 792보다 작으면 null 아니면 다음 조건
          1250보다 작으면 smallSideBar 아니면 BigSideBar를 보여줌
      */}
      {width < 792 ? null : width < 1250 ? <SmallSideBar /> : <BigSideBar />}
    </React.Fragment>
  );
};

export default SideBar;
