import CommentInput from '../CommentInput/CommentInput';
import CommentsList from '../CommentsList/CommentsList';

import './VideoDetail.scss';

function VideoDetail ({ currentVideo, videosDetail, addComment}) {

    return (
        <div>
            <section className='current__video' key={currentVideo.id}>
                <h1 className='current__video__title'>{currentVideo.title}</h1>
                <div className='current__video__info'>
                    <p className='current__video__channel'>By {currentVideo.channel}</p>
                    <p className='current__video__views'>{currentVideo.views}</p>
                    <p className='current__video__timestamp'>{new Date(currentVideo.timestamp).toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"})}</p>
                    <p className='current__video__likes'>{currentVideo.likes}</p>
                </div>
                <p className='current__video__description'>{currentVideo.description}</p>
                <p className='current__video__count'>{currentVideo.comments?.length} Comments</p>
            </section>      
            
            <CommentInput videosDetail={videosDetail} addComment={addComment} />
            <CommentsList currentVideo ={currentVideo} />  
        </div>
    );
}

export default VideoDetail