import React, { useCallback, useEffect, useState } from "react";
import axios from "../../api/axios";
import { getVideoInfo } from "../../helpers/fetchingData";

const MainPage = () => {
  const stroedVideos = JSON.parse(localStorage.getItem("mainVideos"));
  const [mainVideos, setMainVideos] = useState(stroedVideos || []); // 정보를 담아줄 state

  const getMainVideos = useCallback(async () => {
    try {
      if (mainVideos.length === 0) {
        // localStorage에 저장된 데이터가 없을때만 다음을 실행
        const res = await axios.get(
          `/search?part=snippet&maxResults=10&q=beautiful%20place`
        );
        let videosArray = await res.data.items;
        videosArray = await getVideoInfo(videosArray);
        setMainVideos(videosArray);

        localStorage.setItem("mainVideos", JSON.stringify(videosArray));
      }
    } catch (err) {
      console.log(err);
    }
  }, [stroedVideos]);

  useEffect(() => {
    getMainVideos();
  }, [getMainVideos]);

  return <div>MainPage</div>;
};

export default MainPage;
