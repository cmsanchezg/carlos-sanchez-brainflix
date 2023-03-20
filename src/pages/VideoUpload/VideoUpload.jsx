import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import "../VideoUpload/VideoUpload.scss";
import UploadImage from "../../assets/images/Images/Upload-video-preview.jpg";
import { useState, useRef } from "react";

function VideoUpload() {

    const navigate = useNavigate();
    const submitUseRef = useRef();
    const [inputError, setInputError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = submitUseRef.current;
        const title = form.title;
        const description = form.description;

        if (title.value === "" || description.value === "") {
            setInputError("error")
            setTimeout(() => {
                alert("Please complete all fields");
            }, 200)
            return;
        } else {
            axios
            .post("http://localhost:8090/videos", {
                title:title.value,
                description:description.value,
            })
            .then ((response) => {
                alert("Thank you for submitting your video")
                navigate("/")
            })
            .catch((error) => {
                console.log("error", error);
            });
        }
}

return (
        <section className="video__upload">
            <h1 className="video__upload__header">Upload Video</h1>

            <form className="video__upload__forms" onSubmit={handleSubmit} ref={submitUseRef}>
                <div className="video__upload__info">
                    <div className="video__upload__subheader">
                        <h3 className="video__upload__subtitle">video Thumbnail</h3>
                        <img className="video__upload__image" src={UploadImage} alt="" />
                    </div>
                    <div className="video__upload__container">
                        <label className="video__upload__subtitle" htmlFor="title__upload">title your video</label>
                        <input className={`video__upload__input ${inputError}`} type="text" name="title__upload" id="title" placeholder="Add a title to your video" />

                        <label className="video__upload__subtitle" htmlFor="video__description">add a video description</label>
                        <textarea className={`video__upload__input video__upload__input--description ${inputError}`} name="video__description" id="description" placeholder="Add a description to your video"></textarea>
                    </div>
                </div>
                <div className="video__upload__buttons">
                    <button className='video__upload__publish__btn'>publish</button>
                    <Link to={"/"} className='video__upload__cancel__btn'>cancel</Link>
                </div>
            </form>
        </section>
    );
}

// function postVideo() {
//     axios
//     .post(`${api}/videos`)
//     .then ((response) => {
//         console(response.data);
//         setVideoList(response.data);
//     })
//     .catch((error) => {
//         console.log("error", error);
//     });
// };  

export default VideoUpload;