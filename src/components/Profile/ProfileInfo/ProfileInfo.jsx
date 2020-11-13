import React from 'react';
import Preloader from '../../Common/Preloader/preloader';
import './ProfileInfo.css'
import ProfileStatusWithHooks from './ProfileStatus';


const ProfileInfo = ({profile, status, updateStatus, isOwner, props}) =>{
    if (!profile){
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }
    return(
    <div className>
        <div className="profileInfo">
            <div className="profileInfo__left">
                <img className="profile__info__img" alt="" src={profile.photos.large || "https://placehold.it/300x300"} />
                <div>{!isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}</div>
            </div>
            <div>
                <div className="profileInfo__text__name"><b>Full name:</b> {profile.fullName }</div>
                <div className="profileInfo__text__status"><b>Status:</b><ProfileStatusWithHooks status={status} updateStatus={updateStatus} /></div>
            </div>
        </div>
    </div>
    );
}

export default ProfileInfo;