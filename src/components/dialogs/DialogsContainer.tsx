import {addMessageActionCreator, updateNewMessagePostActionCreator} from "../redux/reducers/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../redux/store";
import {Dispatch} from "redux";


const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessage:state.dialogsPage.newMessage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (message: string) => {
            dispatch(updateNewMessagePostActionCreator(message))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer