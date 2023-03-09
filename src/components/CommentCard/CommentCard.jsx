import './CommentCard.scss';

function CommentCard ({currentVideo}) {

    return (
      <section className='comment__card'>  
      {currentVideo.comments
      .map((comment) => (
        
        <li className='comment__card__item' key={comment.id}>
        <div className='comment__card__user__image'></div>
        <div className='comment__card__data'>
            <div className='comment__card__header'> 
                 <p className='comment__card__user__name'>{comment.name}</p>
                <p className='comment__card__timestamp'>{new Date(comment.timestamp).toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"})}</p>
            </div>
            <div className='comment__card__content'>
                 <p className='comment__card__text'>{comment.comment}</p>
            </div>
        </div>
        </li>
      ))}
      </section>
    );
}

export default CommentCard

