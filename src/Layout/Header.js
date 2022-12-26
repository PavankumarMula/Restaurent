import React,{Fragment} from 'react';
import './Header.css';
import HeaderButtonIcon from './HeaderButtonIcon';
const Header= (props) => {
    return <Fragment>
          <header className='header'>
            <h1>React Meals</h1>
            <HeaderButtonIcon customOnClick={props.onShowCart}/>
          </header>
          <div className='main-image'>
            <img src='https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg' alt='Delicious Food'></img>
          </div>
        </Fragment>
}
export default Header;