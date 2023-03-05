import CommentInput from '../CommentInput/CommentInput';
import CommentsList from '../CommentsList/CommentsList';

import './VideoDetail.scss';

function VideoDetail ({videosDetail}) {

    return (
        <section className='Current__video'>
                <div>
                    <h1 className='Current__video__title'>{videosDetail.title}</h1>
                </div>
                <div>
                    <p className='Current__video__channel'>{videosDetail.channel}</p>
                    <p className='Current__video__views'>{videosDetail.views}</p>
                    <p className='Current__video__timestamp'>{videosDetail.timestamp}</p>
                    <p className='Current__video__likes'>{videosDetail.likes}</p>
                </div>
                <div>
                    <p className='Current__video__description'>{videosDetail.description}</p>
                </div>
                <CommentInput videosDetail={videosDetail} />
                <CommentsList videosDetail={videosDetail} />       
        </section>
    );
}

export default VideoDetail