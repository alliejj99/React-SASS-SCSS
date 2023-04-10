import React from "react";
import { useLocation, useParams } from "react-router-dom";
import YouTube from "react-youtube";

const VideoPage = () => {
  const { videoId } = useParams(); // router로 설정한 url 값
  let location = useLocation();

  const { state: currentVideo } = location; // VideoCard에서 Link를 클릭할때 ...video 정보를 받아서 확인이 가능

  const opts = {
    width: "640",
    height: "390",
    playerVars: {
      autoplay: 1,
    },
  };

  const onPlayReady = (e) => {
    e.target.playVideo();
  };

  return (
    <React.Fragment>
      <YouTube
        className="youtube_player"
        videoId={videoId}
        onPlay={onPlayReady}
        opts={opts}
        autoplay
      />
    </React.Fragment>
  );
};

export default VideoPage;
