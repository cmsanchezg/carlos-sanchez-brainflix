import { useState } from 'react';

import '../Home/Home.scss';

import VideoDetail from '../../components/VideoDetail/VideoDetail';
import Hero from '../../components/Hero/Hero';
import VideoList from '../../components/VideoList/VideoList';


import VideosDetailData from '../../data/video-details.json';

function Home() {

  const [videosDetail, setVideosDetail] = useState (VideosDetailData[0]);
  
  function SelectedVideo(id) {
      let newHeroVideo = VideosDetailData.find((video) => video.id === id)
      setVideosDetail(newHeroVideo);
  }

  return (
    <>
      <Hero videosDetail={videosDetail} />
      <main className='main'>
        <VideoDetail videosDetail={videosDetail} />
        <VideoList videosDetailId={videosDetail.id} SelectedVideo={SelectedVideo} />
      </main>
    </>
  );
}

export default Home;