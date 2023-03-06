import CommentInput from '../CommentInput/CommentInput';
import CommentsList from '../CommentsList/CommentsList';

import './VideoDetail.scss';

function VideoDetail ({videosDetail}) {

    return (
        <section className='current__video'>
                <h1 className='current__video__title'>{videosDetail.title}</h1>
                <div className='current__video__info'>
                    <p className='current__video__channel'>By {videosDetail.channel}</p>
                    <p className='current__video__views'>{videosDetail.views}</p>
                    <p className='current__video__timestamp'>{new Date(videosDetail.timestamp).toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"})}</p>
                    <p className='current__video__likes'>{videosDetail.likes}</p>
                </div>
                <p className='current__video__description'>{videosDetail.description}</p>
                <p className='current__video__count'>{videosDetail.comments.length} comments</p>

                <CommentInput videosDetail={videosDetail} />
                <CommentsList videosDetail={videosDetail} />       
        </section>
    );
}

export default VideoDetail