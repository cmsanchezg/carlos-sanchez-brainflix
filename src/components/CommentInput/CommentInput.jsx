import './CommentInput.scss';

import MohanMuruge from '../../assets/images/Images/Mohan-muruge.jpg';

function CommentInput () {

    return (
        <>
        <div className='CommentInput'>
            <p className='CommentInput__count'>3 comments</p>
            <div className='CommentInput__container'>
                <div className='CommentInput__MohanMuruge'>
                    <img src={MohanMuruge} alt="Mohan Muruge" />
                </div>
                <form className='CommentInput__form' action="">
                        <label className='CommentInput__title' htmlFor="comment">join the conversation</label>
                        <textarea className='CommentInput__comment' name="comment" id="comment" placeholder='Add a new comment'></textarea>
                        <button className='CommentInput__comment__btn'>comment</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default CommentInput