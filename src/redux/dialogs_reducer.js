const SEND_MESSAGE = 'SEND-MESSAGE';

let initialsState = {
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
   
}

const dialogsReducer = (state = initialsState, action) => { 
    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return{...state, messagesData:[...state.messagesData, {id:5, message:body}]};
            
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type:SEND_MESSAGE, newMessageBody});


export default dialogsReducer;