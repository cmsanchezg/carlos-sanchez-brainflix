import "../VideoUpload/VideoUpload.scss";
import UploadImage from "../../assets/images/Images/Upload-video-preview.jpg";

function VideoUpload() {
    return (
        <section className="video__upload">
            <h1 className="video__upload__title">Upload Video</h1>
            <div className="video__upload__info">
                <div>
                    <h3 className="video__upload__subtitle">video Thumbnail</h3>
                    <img className="video__upload__image" src={UploadImage} alt="" />
                </div>
                <form className="video__upload__forms">
                    <label className="video__upload__subtitle" htmlFor="title__upload">title your video</label>
                    <input className="video__upload__input" type="text" name="title__upload" id="title__upload" placeholder="Add a title to your video"/>
                    
                    <label className="video__upload__subtitle" htmlFor="video__description">add a video description</label>
                    <textarea className="video__upload__input video__upload__input--description" name="video__description" id="video__description" placeholder="Add a description to your video"></textarea>
                </form>
            </div>
            <button className='video__upload__publish__btn'>publish</button>
            <button className='video__upload__cancel__btn'>cancel</button>
        </section>
    );
}

export default VideoUpload