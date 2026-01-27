import styles from "./SummaryCard.module.scss"

interface CardProps {
    icon: string;
    label: string;
    count: string;
    iconBgColor: string;
}

const SummaryCard = ({ icon, label, count, iconBgColor }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper} style={{ backgroundColor: iconBgColor }}>
                <img src={icon} alt={label} />
            </div>
            <p className={styles.label}>{label}</p>
            <h2 className={styles.count}>{count}</h2>
        </div>
    );
};


export default SummaryCard;