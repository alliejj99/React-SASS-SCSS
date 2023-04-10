#### React - SASS
  Vite와 SASS/SCSS 로 만드는 유튜브앱입니다.

##### npm installs
```bash
$ npm install axios dayjs react-icons react-router-dom react-tooltip react-youtube sass 
$ npm install -D eslint
$ npx eslint --init

# npx eslint 사용할 떄 선택해야 할 항목
# - 처음 패키지 사용 yse
# - javascript(export/..) -> esm
# - react
# - typescript -> no/yes 여부
# - browser
# - confing -> javascript
# - latest 설치 -> yes
# - package manager -> 사용하고 있는거 선택
```


##### Google Youtube API Key
  1. 사이트 접속 [https://console.cloud.google.com/](https://console.cloud.google.com/)  
  2. 상단에서 프로젝트 선택 및 생성  
  3. 상단의 검색 기능에 “Youtube data api” 검색  
  4. YouTube Data API v3 - init (or 만들기 클릭)  
  5. 사용자 인증 정보  
  6. 사용자 인증 정보 만들기  
  7. key 발급  

##### API 데이터 요청 및 출력 순서 정리
  1. axios를 사용해서 instance를 생성한다.  
  ```javascript
  import axios from "axios";

  const instance = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: {
      key: import.meta.env.VITE_API_KEY, // root/env파일 안의 설정한 환경변수
    },
  });

  export default instance;
  ```
  2. 불러올 페이지에서 tryCatch문을 작성한다.  
  ```javascript
  import axios from "../../api/axios";

  const getMainVideos = useCallback(async () => {
    try {
      const res = await axios.get(
        `/search?part=snippet&maxResults=10&q=beautiful%20place` // 쿼리
      );
      let videosArray = await res.data.items;
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getMainVideos();
  }, [getMainVideos]);
  ```