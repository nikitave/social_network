
import { connect } from 'react-redux';
import { addPostActionCreator} from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';





const mapStateToProps = (state) => {
    return{
      postData: state.profilePage.postData,
      newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addPost:(newPostText) => {
      dispatch(addPostActionCreator(newPostText) ); 
    }

  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;