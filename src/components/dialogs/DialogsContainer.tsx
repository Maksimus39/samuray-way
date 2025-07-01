import {addMessage, DialogsPageType, updateNewMessagePost} from "../redux/reducers/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootState} from "../redux/reduxStore";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType,
    newMessage: string
}
type MapDispatchPropsType = {
    addMessage: () => void,
    updateNewMessagePost: (message: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchPropsType


const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessage: state.dialogsPage.newMessage
    }
}

const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    updateNewMessagePost,
})(Dialogs)

export default DialogsContainer