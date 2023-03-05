import './VideoCard.scss';

function VideoCard({video, SelectedVideo}) {

    function handleVideoClick(id) {
        SelectedVideo(id);
    }

    return (
        <li className='Video__card__item' onClick={() => handleVideoClick(video.id)}>
        <img className='Video__card__image' src={video.image} alt="" />
        <div className='Video__card__content'>
            <h3 className='Video__card__title'>{video.title}</h3>
            <h4 className='Video__card__channel'>{video.channel}</h4>
        </div>
        </li>
    );
}

export default VideoCard;
