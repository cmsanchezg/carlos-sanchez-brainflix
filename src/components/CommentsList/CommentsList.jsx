import './CommentsList.scss';

import CommentCard from '../CommentCard/CommentCard';

function CommentsList ({currentVideo}) {

    return (
        <>
        <ul className='comment__list'>
            <CommentCard currentVideo ={currentVideo} />
        </ul>
        </>
    );
}

export default CommentsList