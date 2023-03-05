import './CommentsList.scss';

import CommentCard from '../CommentCard/CommentCard';

function CommentsList ({videosDetail}) {

    return (
        <>
        <ul className='comment'>
            <CommentCard videosDetail={videosDetail} />
        </ul>
        </>
    );
}

export default CommentsList