import React from 'react';
// import Logo from '../../images/logo.svg';
import './Avatar.scss';

function Avatar(props) {
    const {url, smallAvatar, name, additionalInfo} = props;
    const avatarClass = smallAvatar ? 'smallAvatar' : 'bigAvatar';
    console.log(avatarClass);
    return <div className={'avatarParent'}>
             <img src={url} alt="Avatar" className={avatarClass}/>
             <div className={'textContainer'}>
                <div className={'name'}>{name}</div>
                <div className={'additionalInfo'}>{additionalInfo}</div>
             </div>
           </div>;
}

export default Avatar;