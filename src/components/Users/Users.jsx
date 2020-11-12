import React from 'react';
import "./Users.css"
import Paginator from '../Common/Paginator/Paginator';
import User from './User';



let Users = ({currentPage, totalUsersCount, pageSize, follow, nofollow, users, followingInProgress, onPageChanged, ...props}) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
       <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
        
            {users.map(u => <User user={u} followingInProgress={followingInProgress} nofollow={nofollow} follow={follow} key={u.id}  />)}
                
        </div>
   
}

export default Users;