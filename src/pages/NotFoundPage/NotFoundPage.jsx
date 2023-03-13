import { NavLink } from 'react-router-dom';

import '../NotFoundPage/NotFoundPage.scss';
import errorImage from '../../assets/images/Images/404-not-found-page.jpg'

function NotFoundPage() {

  return (
    <>
    <div className='not__found__page'>
        <NavLink to="/" className='not__found__page__home__btn'>
            <div>home</div>
        </NavLink>
        <img className='not__found__page__image' src={errorImage} alt=" 404-error, Page Not Found" />   
    </div>
    </>
  );
}

export default NotFoundPage;