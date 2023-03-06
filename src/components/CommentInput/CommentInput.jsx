import './CommentInput.scss';

import MohanMuruge from '../../assets/images/Images/Mohan-muruge.jpg';

function CommentInput () {

    return (
        <>
        <section className='comment__input'>
            <p className='comment__input__count'>3 comments</p>
            <div className='comment__input__container'>
                <div className='comment__input__MohanMuruge'>
                    <img src={MohanMuruge} alt="Mohan Muruge" />
                </div>
                <form className='comment__input__form'>
                        <div className='comment__input__form__wrapper'>
                            <label className='comment__input__title' htmlFor="comment">join the conversation</label>
                            <textarea className='comment__input__comment' name="comment" id="comment" placeholder='Add a new comment'></textarea>
                        </div>
                        <button className='comment__input__comment__btn'>comment</button>
                </form>
            </div>
        </section>
        </>
    );
}

export default CommentInput