import React, { useContext, useEffect } from "react";
import useWindowSize from "../../helpers/useWindowSize";
import SmallSideBar from "./SmallSideBar";
import BigSideBar from "./BigSideBar";
import { SideBarContext } from "../../context/SideBarContext";

const SideBar = () => {
  const { width } = useWindowSize();
  const { isToggled, setIsToggled } = useContext(SideBarContext);

  useEffect(() => {
    width <= 1320
      ? setIsToggled(false)
      : location.pathname.startsWith("/video") // location.pathname: 비디오 재생할때 얻는 url키값
      ? setIsToggled(false)
      : setIsToggled(true);
  }, [location.pathname, setIsToggled, width]);

  return (
    <>
      {location.pathname.startsWith("/video/") ? (
        isToggled ? (
          // 기본 화면에서 영상을 클릭하고 페이지를 이동했다면 큰 사이드바를 호출
          <BigSideBar />
        ) : null
      ) : width < 792 ? null : isToggled ? (
        <BigSideBar />
      ) : (
        <SmallSideBar />
      )}
    </>
  );
};

export default SideBar;
