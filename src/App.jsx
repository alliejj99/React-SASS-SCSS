import React, { useCallback } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchedVideosPage from "./pages/SearchedVideosPage";
import VideoPage from "./pages/VideoPage";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";

const Layout = useCallback(() => {
  return (
    <React.Fragment>
      <NavigationBar />
      <SideBar />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
}, []);

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/results/:input" element={<SearchedVideosPage />} />
          <Route path="/video/:videoId" element={<VideoPage />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
