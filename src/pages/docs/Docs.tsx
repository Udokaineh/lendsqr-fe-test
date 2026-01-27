import { Link } from "react-router-dom";
import { backIcon } from "../../assets/icons";
import styles from "./Docs.module.scss";

const Docs = () => {
    return (
        <div className={styles.docsPage}>
            <Link to="/dashboard" className={styles.backLink}>
                <img src={backIcon} alt="back icon" />
                <span>Back to Users</span>
            </Link>

            <header className={styles.header}>
                <h1>Future Enhancements & Roadmap</h1>
                <p>Strategic technical design and upcoming features for the Lendsqr Admin Dashboard.</p>
            </header>

            <section className={styles.section}>
                <h2>1. The Filter Modal (Technical Design)</h2>
                <p>
                    While the current version supports global search via the Dashboard search bar, 
                    I have designed the architecture for the Table Header Filter Modal.
                </p>
                <ul>
                    <li><strong>Logic:</strong> I will implement a "Controlled Component" modal that stores local state for the six filter fields (Organization, Username, Email, Date, Phone Number, Status).</li>
                    <li><strong>Filtering Strategy:</strong> Instead of standard .filter(), I plan to use a multi-pass filter function that can handle null values and exact matches for statuses.</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2>2. Unit Testing</h2>
                <div className={styles.infoBox}>
                    <p><strong>Plan:</strong> Implement Jest and React Testing Library specifically for the pagination and status-badge logic.</p>
                    <p><strong>Rationale:</strong> In fintech, ensuring that a "Blacklisted" status is correctly applied in the UI is a mission-critical feature that requires automated test coverage.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2>3. API Integration</h2>
                <div className={styles.infoBox}>
                    <p><strong>Plan:</strong> Swap the current localStorage mock-sync for a TanStack Query (React Query) implementation.</p>
                    <p><strong>Rationale:</strong> This would allow for real-time data caching, background refetching, and better handling of the loading states we’ve already designed.</p>
                </div>
            </section>
        </div>
    );
};

export default Docs;