import './CommentsList.scss';

import CommentCard from '../CommentCard/CommentCard';

function CommentsList ({videosDetail}) {

    return (
        <>
        <ul className='comment__list'>
            <CommentCard videosDetail={videosDetail} />
        </ul>
        </>
    );
}

export default CommentsList