import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss"


const UserNotFound = () => (
    <div className={styles.notFoundContainer}>
        <div className={styles.content}>
            <h1>404</h1>
            <h2>User Not Found</h2>
            <p>The user you are looking for doesn't exist or has been removed.</p>
            <Link to="/dashboard/users" className={styles.backBtn}>
                Go Back to Users
            </Link>
        </div>
    </div>
);


export default UserNotFound;
