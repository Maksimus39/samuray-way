import React from 'react';
import styles from './Profile.module.css'
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootState} from "../redux/reduxStore";
import {setUserProfile, ProfilePageType, UserProfileType} from "../redux/reducers/profilereducer";

type MapStatePropsType = {
    profile: ProfilePageType['profile'] // или просто 'null', если profile действительно null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

export type PropsTypeProfile = MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<PropsTypeProfile> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <div className={styles.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppRootState): MapStatePropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)