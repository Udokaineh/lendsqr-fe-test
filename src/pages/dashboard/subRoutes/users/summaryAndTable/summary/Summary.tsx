
import { activeUsers, laonUsers, savingUsers, usersIcon } from "../../../../../../assets/icons";
import SummaryCard from "../../../../../../components/summaryCard/SummaryCard";
import { User } from "../../../../../../types";
import styles from "./Summary.module.scss"


const Summary = ({ users }: { users: User[] }) => {
    const stats = [
        {
            icon: usersIcon,
            label: "Users",
            count: users.length.toLocaleString(),
            color: "rgba(223, 24, 255, 0.1)"
        },
        {
            icon: activeUsers,
            label: "Active Users",
            count: users.filter(u => u.status === 'Active').length.toLocaleString(),
            color: "rgba(87, 24, 255, 0.1)"
        },
        {
            icon: laonUsers,
            label: "Users with Loans",
            count: users.filter(u => u.hasLoan).length.toLocaleString(),
            color: "rgba(245, 95, 68, 0.1)"
        },
        {
            icon: savingUsers,
            label: "Users with Savings",
            count: users.filter(u => u.hasSavings).length.toLocaleString(),
            color: "rgba(255, 51, 102, 0.1)"
        },
    ];

    return (
        <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
                <SummaryCard
                    key={index}
                    icon={stat.icon}
                    label={stat.label}
                    count={stat.count}
                    iconBgColor={stat.color}
                />
            ))}
        </div>
    );
};

export default Summary;