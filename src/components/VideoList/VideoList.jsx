import './VideoList.scss';
import VideoCard from '../VideoCard/VideoCard';

function VideoList({videosDetail, currentVideoId}) {

    return (
        <section className='video__list'>
        <h3 className='video__list__title'>next videos</h3>
        <ul>
        {videosDetail
            .filter((video) => (video.id !== currentVideoId))
            .map((video) => (
                <VideoCard key={video.id} videoId={video.id} image={video.image} title={video.title} channel={video.channel}/>
            ))}
        </ul>
        </section>
        );
}

export default VideoList;