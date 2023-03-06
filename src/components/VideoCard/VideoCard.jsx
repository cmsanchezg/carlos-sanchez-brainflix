import './VideoCard.scss';

function VideoCard({video, SelectedVideo}) {

    function handleVideoClick(id) {
        SelectedVideo(id);
    }

    return (
        <li className='video__card' onClick={() => handleVideoClick(video.id)}>
            <img className='video__card__image' src={video.image} alt="" />
            <div className='video__card__content'>
                <h3 className='video__card__title'>{video.title}</h3>
                <h4 className='video__card__channel'>{video.channel}</h4>
            </div>
        </li>
    );
}

export default VideoCard;
