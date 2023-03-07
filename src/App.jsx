import { useState } from 'react';

import './App.scss';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';


import VideosDetailData from './data/video-details.json';

function App() {

  const [videosDetail, setVideosDetail] = useState (VideosDetailData[0]);
  
  function SelectedVideo(id) {
      let newHeroVideo = VideosDetailData.find((video) => video.id === id)
      setVideosDetail(newHeroVideo);
  }

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
