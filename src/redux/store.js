import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";


let store ={
    _state:{
        profilePage:{
            postData:[
                {id:1, message:"Hi, how are you?", like:14},
                {id:2, message:"It is my first post", like:17},
                {id:3, message:"I do not know what I can write", like:2001}
            ],  
            newPostText:'Hi'
        },
        messagesPage:{
            messagesData:[
                {id:1, message:"Hi!"},
                {id:2, message:"How are you?"},
                {id:3, message:"I am good"},
                {id:4, message:"I am too"}
            ],
            dialogsData:[
                {id:1, name:"User1"},
                {id:2, name:"User2"},
                {id:3, name:"User3"},
                {id:4, name:"User4"}
            ],
            newMessageBody:""
       }
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    getState () {
        return this._state;
    },
    subscribe (observer)  {
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }  

        
}

export default store;
window.store = store;