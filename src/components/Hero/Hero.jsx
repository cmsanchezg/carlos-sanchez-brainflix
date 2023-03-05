import './Hero.scss';

function Hero({videosDetail}) {
    
    return (
        <section className='hero'>
            <video controls
                className='hero__video'
                key={videosDetail.id}
                poster={videosDetail.image}
                src={videosDetail.video}>
            </video>
        </section> 
    );
}

export default Hero;