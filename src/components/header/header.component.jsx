import React from 'react';
import { Link } from 'react-router-dom';
// Access to things related to redux - HOC
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import rootReducer from '../../redux/root-reducer';

const Header = ({currentUser, hidden}) =>(
  <div className='header'>
    <Link to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to ='/shop'>
        SHOP
      </Link>
      <Link className='option' to ='/contact'>
        CONTACT
      </Link> 
      {
        currentUser ? (
        <div 
          className='option' 
          onClick= { () => auth.signOut()}
        > 
          SIGN OUT
        </div>
        ) : (
        <Link 
          className='option' to='/signin'
        >
        SIGN IN
        </Link>
        )}
        <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);
const mapStateToProps = ({user: { currentUser }, cart: {hidden} }) => ({
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);