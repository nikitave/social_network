import React from "react"
import { NavLink } from "react-router-dom"
import "./Users.css"

const User = ({user, followingInProgress, nofollow, follow}) => {
    
    return(
        <div>
            <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img className="user__photo" alt="" src={user.photos.small != null ? user.photos.small : "https://placehold.it/100x100"} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                nofollow(user.id)
                            }}>UnFollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
}
        

export default User;