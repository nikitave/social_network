import React  from 'react';
import './Dialogs.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../Common/FormsControls/FormsControl';
import { maxLengthCreator, requiredField } from '../../utils/Validators/validators';



const Dialogs = (props) =>{
   
    let state=props.messagesPage;

    let dialogsElements = state.dialogsData.map(dialog =>  <Dialog name={dialog.name} key={dialog.id} id={dialog.id} /> );
    let messagesElements = state.messagesData.map(message =>  <Message message={message.message} key={message.id} /> );
    
    

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"} /> ;

    return(
        <div className="dialogs"> 
            <div className="dialogs__dialogs">
                {dialogsElements}
            </div> 
            <div className="dialogs__messages">
                <div>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
}   

const maxLength1000 = maxLengthCreator(1000)

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
        <div className="dialogs__write">
            <Field component={Textarea} validate={[requiredField, maxLength1000  ]} name="newMessageBody" placeholder="Enter your message" />
        </div>
        <div><button className="dialogs__button">Send</button></div>
    </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;