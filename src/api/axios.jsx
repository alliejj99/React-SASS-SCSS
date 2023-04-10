import axios from "axios";

const instance = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: import.meta.env.VITE_API_KEY, // root/env파일 안의 설정한 환경변수
  },
});

export default instance;
