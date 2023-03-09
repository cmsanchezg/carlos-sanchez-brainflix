import './Hero.scss';

function Hero({currentVideo}) {
    
    return (
        <section id='hero' className='hero'>
            <video controls
                className='hero__video'
                key={currentVideo.id}
                poster={currentVideo.image}
                src={currentVideo.video}>
            </video>
        </section> 
    );
}

export default Hero;