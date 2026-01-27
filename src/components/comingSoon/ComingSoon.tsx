import styles from "./ComingSoon.module.scss";

const ComingSoon = () => (
    <div className={styles.comingSoonContainer}>
        <div className={styles.content}>
            <h2>Feature Coming Soon</h2>
            <p>This part of the dashboard is currently under development.</p>
        </div>
    </div>
);

export default ComingSoon;