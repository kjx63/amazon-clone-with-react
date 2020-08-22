import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../StateProvider';

const Header = () => {
  // const [state, dispatch] = useStateValue();
  const [{ basket }] = useStateValue();
  console.log(basket);

  return (
    <nav className='header'>
      <Link to='/'>
        <img
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
          className='header__logo'
        />
      </Link>

      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        {/* 1st link */}
        <Link to='/login' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello Kenji</span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>

        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
