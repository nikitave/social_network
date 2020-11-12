import React  from 'react';
import './Post.css';

const Post = (props) =>{
    return(
        <div className="post">
            <img className="post__img" src="https://placehold.it/100x100" />
            { props.message }
            <div>
                <span>{props.like} like</span>
            </div>
        </div>                 
    );
}

export default Post;   