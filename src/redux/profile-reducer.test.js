import profileReducer, { addPostActionCreator, deletePost } from "./profile_reducer"


let state =  {
    postData:[
    {id:1, message:"Hi, how are you?", like:14},
    {id:2, message:"It is my first post", like:17},
    {id:3, message:"I do not know what I can write", like:2001}
    ],  
}
it ('new post should be added', () => {
    
    let action = addPostActionCreator("HI")
    let newState = profileReducer(state, action)
    expect( newState.postData.length).toBe(4)
})
it('message good', () => {
    let action = addPostActionCreator("HI")
    let newState = profileReducer(state, action)
    expect(newState.postData[3].message).toBe("HI")
})
it('delete', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(2)
})
it('delete is not', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(3)
})