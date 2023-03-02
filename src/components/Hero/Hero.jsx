import './Hero.scss';

function Hero() {
    return (
        <div>
        <video controls
        className='Hero__video'
        poster='https://i.imgur.com/l2Xfgpl.jpg'
        src="https://project-2-api.herokuapp.com/stream">
        </video>
        </div>
        );
}

export default Hero;