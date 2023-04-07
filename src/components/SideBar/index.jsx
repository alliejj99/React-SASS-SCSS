import React, { useContext, useEffect } from "react";
import useWindowSize from "../../helpers/useWindowSize";
import SmallSideBar from "./SmallSideBar";
import BigSideBar from "./BigSideBar";
import { SideBarContext } from "../../context/SideBarContext";

const SideBar = () => {
  const { width } = useWindowSize();
  const { isToggled, setIsToggled } = useContext(SideBarContext);

  useEffect(() => {
    window <= 1300 ? setIsToggled(false) : setIsToggled(true);
  }, []);

  return (
    <React.Fragment>
      {/* 792보다 작으면 null 아니면 다음 조건
          IsToggled가 true면 BigSideBar 아니면 smallSideBar를 보여줌
      */}
      {width < 792 ? null : isToggled ? <BigSideBar /> : <SmallSideBar />}
    </React.Fragment>
  );
};

export default SideBar;
