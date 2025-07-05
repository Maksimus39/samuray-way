import React from "react";
import styles from "./ProfileInfo.module.css"
import {Preloader} from "../../common/preloader/Preloader";


type ProfileProps = {
    profile: any
}
export const ProfileInfo = (props: ProfileProps) => {

    if (!props.profile === null) {
        return <Preloader/>
    }

    console.log(props.profile)

    return (
        <div className={styles.images}>
            <img
                src="https://src-sakha.ru/images/2022/12/19/%D1%81%D0%BE%D1%86%D0%B8%D0%BD%D0%B8%D1%86%D0%B8%D0%B0%D1%82%D0%B8%D0%B2%D0%B0.jpg"
                alt="img"/>

            <div>
                <img src={props.profile.photos.large} alt="profile"/>
            </div>
        </div>
    )
}