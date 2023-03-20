import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './HomePage.scss';

import VideoDetail from '../../components/VideoDetail/VideoDetail';
import Hero from '../../components/Hero/Hero';
import VideoList from '../../components/VideoList/VideoList';

export const api = "http://localhost:8090";
// export const apiKey = "3b8c6741-ddde-4934-8174-9ff3b241b3e5";


function HomePage() {

  const [videosDetail, setVideosDetail] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const {videoId} = useParams();

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    if (videoId) {
        getVideo(videoId);
    }
    else if (videosDetail.length) {
        getVideo(videosDetail[0].id);
    }
  }, [videoId, videosDetail]);
  
function getVideos () {
    axios
    .get(`${api}/videos`)
    .then((response) => {
        setVideosDetail(response.data);
    })
    .catch((error) => {
        console.log("error", error);
    });
}

function getVideo(videoId) {
  axios
  .get(`${api}/videos/${videoId}`)
  .then ((res) => {
      setCurrentVideo(res.data);
  })
  .catch((error) => {
      console.log("error", error);
  });
}

  return (    
    currentVideo && videosDetail.length?
    <>

      <Hero currentVideo={currentVideo} />
      <main className='main'>
        <VideoDetail currentVideo ={currentVideo}/>
        <VideoList videosDetail={videosDetail} currentVideoId ={currentVideo.id} />
      </main>
    </>:""
  );
}

export default HomePage;