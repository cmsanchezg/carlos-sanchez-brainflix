import './VideoCard.scss';

import { Link } from 'react-router-dom';

function VideoCard({ videoId, image, title, channel}) {

    return (
        <li className='video__card'>
        <Link className='video__card__link' to={`/videos/${videoId}`}>
        
        <img className='video__card__image' src={image} alt="" />
        <div className='video__card__content'>
            <h3 className='video__card__title'>{title}</h3>
            <h4 className='video__card__channel'>{channel}</h4>
        </div>
        
        </Link>
        </li>
    );
}

export default VideoCard;
