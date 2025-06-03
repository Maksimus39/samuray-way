import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/reducers/profilereducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ProfilePageType} from "../../redux/store";
import {Dispatch} from "redux";
import {AppRootState} from "../../redux/reduxStore";

type MapStatePropsType = {
    profilePage: ProfilePageType; // Замените на ваш тип из store
    newPostText: string;
};
type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void;
    addPost: () => void;
};

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
             dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer

