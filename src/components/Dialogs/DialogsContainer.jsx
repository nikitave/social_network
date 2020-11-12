import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageCreator } from '../../redux/dialogs_reducer';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import Dialogs from './Dialogs'; 


let mapStateToProps = (state) => {
    return{
        messagesPage: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        sendMessage:(newMessageBody) =>{
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);