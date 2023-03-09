import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './HomePage.scss';

import VideoDetail from '../../components/VideoDetail/VideoDetail';
import Hero from '../../components/Hero/Hero';
import VideoList from '../../components/VideoList/VideoList';

export const api = "https://project-2-api.herokuapp.com";
export const apiKey = "3b8c6741-ddde-4934-8174-9ff3b241b3e5";


function HomePage() {

  const [videosList, setVideoList] = useState([]);

  const [videosDetail, setVideosDetail] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const {videoId} = useParams();
  
  // function SelectedVideo(id) {
  //     let newHeroVideo = VideosDetailData.find((video) => video.id === id)
  //     setVideosDetail(newHeroVideo);
  // }

  useEffect(() => {
    getVideosList();
}, []);


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

  function getVideosList() {
    axios
    .get(`${api}/videos?api_key=${apiKey}`)
    .then ((response) => {
        setVideoList(response.data);
    })
    .catch((error) => {
        console.log("error", error);
    });
}  

function getVideos () {
    axios
    .get(`${api}/videos?api_key=${apiKey}`)
    .then((response) => {
        setVideosDetail(response.data);
    })
    .catch((error) => {
        console.log("error", error);
    });
}

function getVideo(videoId) {
  axios
  .get(`${api}/videos/${videoId}?api_key=${apiKey}`)
  .then ((res) => {
      setCurrentVideo(res.data);
  })
  .catch((error) => {
      console.log("error", error);
  });
}

  return (    
    currentVideo && videosList.length?
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