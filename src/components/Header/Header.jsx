import './Header.scss';
import Logo from '../../assets/images/Logo/BrainFlix-logo.svg';
import MuhanMuruge from '../../assets/images/Images/Mohan-muruge.jpg';


function Header () {
    return (
        <header className='Header'>
            <img className='Header__logo' src={Logo} alt="BrainFlix Logo"/>
            <div className='Header__right'>
                <form className='Header__form' action="">
                    <input className='Header__input' type="text" placeholder='Search' />
                </form>
                <img className='Header__MohanMuruge' src={MuhanMuruge} alt="Muhan Muruge" />
                <a className='Header__upload__btn' href="google.com">Upload</a>
            </div>
        </header>
    );
}

export default Header;

