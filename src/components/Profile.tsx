import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css"

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/giovannikarioca.png" alt="Giovanni Ramos" />
            <div>
                <strong>Giovanni Ramos</strong>
                <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}</p>
            </div>
        </div>
    );
}