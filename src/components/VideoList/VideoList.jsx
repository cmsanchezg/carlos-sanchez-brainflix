import { useState } from 'react';

import './VideoList.scss';
import VideoCard from '../VideoCard/VideoCard';

import VideosData from '../../data/videos.json';


function VideoList({SelectedVideo, videosDetailId}) {

    const [videos] = useState(VideosData);

    return (
        <section className='video__list'>
        <h3 className='video__list__title'>next videos</h3>
        <ul>
            {videos
            .filter((video) => (video.id !== videosDetailId))
            .map((video) => (
                <VideoCard SelectedVideo={SelectedVideo} key={video.id} video={video}/>
            ))}
        </ul>
        </section>
        );
}

export default VideoList;