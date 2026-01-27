import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DetailsBody from "./detailsBody/DetailsBody";
import UserDetailsHeader from "./detailsHeader/Header";
import styles from './UserDetails.module.scss';
import { backIcon } from "../../../../../assets/icons";
import { User } from "../../../../../types";
import toast from "react-hot-toast";
import UserNotFound from "../../../../../components/notFound/NotFound";


const UserDetails = () => {
    const [activeTab, setActiveTab] = useState('General Details');

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const allUsers = JSON.parse(localStorage.getItem("lendsqr_users") || "[]");

        const foundUser = allUsers.find((u: User) => u.id === id);
        setUser(foundUser);
    }, [id]);

    const handleStatusChange = (newStatus: 'Blacklisted' | 'Active') => {
        if (!user) return;

        if (user.status === newStatus) {
            toast.error(`User is already ${newStatus.toLowerCase()}`);
            return;
        }

        const allUsers: User[] = JSON.parse(localStorage.getItem("lendsqr_users") || "[]");

        const updatedUsers = allUsers.map(u =>
            u.id === user.id ? { ...u, status: newStatus } : u
        );

        localStorage.setItem("lendsqr_users", JSON.stringify(updatedUsers));

        setUser({ ...user, status: newStatus });

        if (newStatus === 'Active') {
            toast.success(`${user.profile.firstName} has been activated`);
        } else {
            toast.error(`${user.profile.firstName} has been blacklisted`);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const allUsers = JSON.parse(localStorage.getItem("lendsqr_users") || "[]");
            const foundUser = allUsers.find((u: User) => u.id === id);
            setUser(foundUser);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [id]);

    if (loading) {
        return (
            <div className={styles.loaderContainer}>
                <div className={styles.spinner}></div>
                <p>Fetching user details...</p>
            </div>
        );
    }


    if (!user) return <UserNotFound />

    return (
        <div className={styles.container}>
            <Link to="/dashboard/users" className={styles.backLink}>
                <img src={backIcon} alt="back icon" />
                <span>Back to Users</span>
            </Link>
            <div className={styles.headerTitle}>
                <h1>User Details</h1>
                <div className={styles.actionButtons}>
                    <button className={styles.blacklistBtn} onClick={() => handleStatusChange('Blacklisted')}>Blacklist User</button>
                    <button className={styles.activateBtn} onClick={() => handleStatusChange('Active')}>Activate User</button>
                </div>
            </div>

            <UserDetailsHeader
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                user={user}
            />
            <DetailsBody activeTab={activeTab} user={user} />
        </div>
    )
}


export default UserDetails;