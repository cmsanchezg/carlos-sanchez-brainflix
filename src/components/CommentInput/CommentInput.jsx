// import { useState } from 'react';

import './CommentInput.scss';

import MohanMuruge from '../../assets/images/Images/Mohan-muruge.jpg';
// import axios from 'axios';

// export const api = "https://project-2-api.herokuapp.com";
// export const apiKey = "3b8c6741-ddde-4934-8174-9ff3b241b3e5";


function CommentInput () {

    // const [addComment, setAddComment] = useState();

    // const handleSubmit = ((event) => {
    //     event.preventDefault();

    //     setAddComment(event.target.value)
    //     console.log (addComment)
    //   })

    // axios
    //     .post(`${api}/videos/${videoId}?api_key=${apiKey}, newComment`)
    //     .then((response) => {
    //     setAddComment(response.data)
    //     console.log(response.data)
    //     })


    return (
        <>
        <section className='comment__input'>
            <div className='comment__input__container'>
                <div className='comment__input__MohanMuruge'>
                    <img src={MohanMuruge} alt="Mohan Muruge" />
                </div>
                <form className='comment__input__form'>
                        <div className='comment__input__form__wrapper'>
                            <label className='comment__input__title' htmlFor="comment">join the conversation</label>
                            <textarea className='comment__input__comment' name="comment" id="comment" placeholder='Add a new comment'></textarea>
                        </div>
                        <button className='comment__input__comment__btn'>
                        comment
                        </button>
                </form>
            </div>
        </section>
        </>
    );
}

export default CommentInput