import { useEffect, useState } from "react";
import { User } from "../../../../types";
import styles from "./Users.module.scss";
import Summary from "./summaryAndTable/summary/Summary";
import UserTable from "./summaryAndTable/userTable/UserTable";

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);


    const loadData = async () => {
        setIsLoading(true);
        setError(false);
        try {
            await new Promise(resolve => setTimeout(resolve, 600));
            const cachedData = localStorage.getItem("lendsqr_users");

            if (cachedData) {
                setUsers(JSON.parse(cachedData));
            } else {
                const response = await fetch('/users.json');
                if (!response.ok) throw new Error("Failed to fetch");

                const data = await response.json();
                localStorage.setItem("lendsqr_users", JSON.stringify(data));
                setUsers(data);
            }
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    if (isLoading) return <div className={styles.loaderContainer}><div className={styles.spinner}></div></div>;

    if (error || (users.length === 0 && !isLoading)) {
        return (
            <div className={styles.errorContainer}>
                <h2>Oops! Something went wrong</h2>
                <p>We couldn't load the user data. Please check your connection.</p>
                <button onClick={loadData} className={styles.retryBtn}>
                    Retry Loading
                </button>
            </div>
        );
    }

    return (
        <div className={styles.usersPage}>
            <h1 className={styles.title}>Users</h1>
            <Summary users={users} />
            <UserTable users={users} setUsers={setUsers} />
        </div>
    );
};

export default Users;