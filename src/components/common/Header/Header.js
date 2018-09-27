import React from 'react';
import './Header.scss';
import Logo from '../../../images/logo.svg';
import Button from '../Button';
import Avatar from '../Avatar';

function Header(props) {
    const {gotoBtw} = props;
    return <div className="header">
            <div className='textWrapper'>
              <p className='headerText'>Highlights</p>     
              <p className='headerText'>Case Studies</p> 
            </div>   
            <div className='imageWrapper'>
                <img src ={Logo}/>    
            </div> 
            <div className='buttonAvatar'>
               <Button buttonText={'NEW BTW'} onClick={gotoBtw}/>
               <Avatar url={Logo} smallAvatar/>
            </div>        
        </div>;
}

export default Header;