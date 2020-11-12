import React from 'react';
import Preloader from '../../Common/Preloader/preloader';
import './ProfileInfo.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) =>{
    if (!profile){
        return <Preloader />
    }
    return(
    <div>
        <div className="profileInfo__text">
            <img alt="" src={profile.photos.large} />
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    </div>
    );
}

export default ProfileInfo;