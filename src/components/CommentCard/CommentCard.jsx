import './CommentCard.scss';

function CommentCard ({videosDetail}) {

    return (
      <div>  
      {videosDetail.comments
      .map((comment) => (
        
        <li className='comment__item' key={comment.id}>
        <div className='comment__user__image'></div>
        <div className='comment__data'>
            <div className='comment__header'> 
                 <p className='comment__user__name'>{comment.name}</p>
                <p className='comment__timestamp'>{comment.timestamp}</p>
            </div>
            <div className='comment__content'>
                 <p className='comment__text'>{comment.comment}</p>
            </div>
        </div>
        </li>
      ))}
      </div>
    );
}

export default CommentCard