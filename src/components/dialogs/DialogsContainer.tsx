import {addMessageActionCreator, updateNewMessagePostActionCreator} from "../redux/reducers/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DialogsPageType} from "../redux/store";
import {Dispatch} from "redux";
import {AppRootState} from "../redux/reduxStore";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType,
    newMessage: string
}
type MapDispatchPropsType = {
    addMessage: () => void,
    onMessageChange: (message: string) => void
}

export type DialogsPropsType = MapStateToPropsType &MapDispatchPropsType


const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessage: state.dialogsPage.newMessage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
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