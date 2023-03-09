import { NavLink } from 'react-router-dom';

import './Header.scss';
import Logo from '../../assets/images/Logo/BrainFlix-logo.svg';
import MuhanMuruge from '../../assets/images/Images/Mohan-muruge.jpg';


function Header () {
    return (
        <header className='header'>
            <NavLink to="/">
            <img className='header__logo' src={Logo} alt="BrainFlix Logo"/>
            </NavLink>
            <div className='header__right'>
                <form className='header__form' action="">
                    <input className='header__input' type="text" placeholder='Search' />
                </form>
                <img className='header__mohanmuruge' src={MuhanMuruge} alt="Muhan Muruge" />
                <NavLink to="/VideoUpload" className='header__upload__btn'>    
                    <div>Upload</div>
                </NavLink>
            </div>
        </header>
    );
}

export default Header;

