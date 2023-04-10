import React, { useCallback, useEffect, useState } from "react";
import axios from "../../api/axios";
import { getVideoInfo } from "../../helpers/fetchingData";

const MainPage = () => {
  // const [mainVideos, setMainVideos] = useState([]); // 정보를 담아줄 state

  const getMainVideos = useCallback(async () => {
    try {
      const res = await axios.get(
        `/search?part=snippet&maxResults=10&q=beautiful%20place`
      );
      let videosArray = await res.data.items;
      console.log("videosArray 1", videosArray);

      videosArray = await getVideoInfo(videosArray);
      console.log("videosArray 2", videosArray);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getMainVideos();
  }, [getMainVideos]);

  return <div>MainPage</div>;
};

export default MainPage;
