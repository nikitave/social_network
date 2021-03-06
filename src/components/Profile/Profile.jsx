import React  from 'react';
import "./Profile.css"
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const  Profile = (props) => {
    return(
        <div className="content">
          <ProfileInfo props={props} profile={props.profile}status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} />
          <MyPostsContainer  />
      </div>
    );
}
export default Profile;