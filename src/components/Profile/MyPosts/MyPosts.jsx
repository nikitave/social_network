import React  from 'react';
import { Field, reduxForm } from 'redux-form';
import './MyPosts.css';
import Post from './Post/Post';
import {maxLengthCreator, requiredField} from "../../../utils/Validators/validators"
import { Textarea } from '../../Common/FormsControls/FormsControl';

let maxLength300 = maxLengthCreator(300)

const  MyPosts = React.memo(props => {
    let postsElements = [...props.postData].reverse().map( p => <Post message={p.message} like={p.like} />);
    let  onAddPost = (values) => {
      props.addPost(values.newPostText);
    }
      return(
        <div className="my__posts">
          <h3>My posts</h3>
          <AddFormRedux onSubmit={onAddPost} />
          <div className="posts">
            {postsElements}
          </div>
        </div>
      );
});

const AddNewPostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <Field name="newPostText" component={Textarea} placeholder={"Post message"} validate={[requiredField, maxLength300 ]} /><br/>
      <button className="post__button">Add post</button>
    </form>
  )
}

let AddFormRedux = reduxForm({form:"ProfileAddNewPostFrom"})(AddNewPostForm)

export default MyPosts; 