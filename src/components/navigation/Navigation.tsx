import { Link } from "react-router-dom"
import { dropDownFilled, notification, search } from "../../assets/icons"
import { Menu } from "lucide-react";
import logo from "../../assets/logo.svg"
import styles from "./Navigation.module.scss"


interface NavigationProps {
    onToggleSidebar: () => void;
    searchTerm: string;
    onSearchChange: (value: string) => void;
    firstName?: string;
    userAvatar?: string;
}

const Navigation = ({ onToggleSidebar, searchTerm, onSearchChange, firstName, userAvatar }: NavigationProps) => {
    return (
        <nav className={styles.navContainer}>
            <div className={styles.leftSection}>
                <Menu
                    className={styles.hamburger}
                    onClick={onToggleSidebar}
                    size={24}
                />

                <Link to="/dashboard" className={styles.logo}>
                    <img className={styles.logo} src={logo} alt="lendsqr logo" />
                </Link>
            </div>

            <div className={styles.searchContainer}>
                <input type="text"
                    placeholder="Search for anything"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                <button className={styles.searchButton}>
                    <img src={search} alt="search" />
                </button>
            </div>

            <div className={styles.docsAndAvatarContainer}>
                <div className={styles.docsContainer}>
                    <a
                        href="https://udoka-ineh-lendsqr-fe-test-documentation.notion.site/Lendsqr-Admin-Dashboard-Implementation-Documentation-2f5b269e6a18803a8dc5fb05054a67d7?source=copy_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.docsLink}
                    >
                        Docs
                    </a>
                    <img src={notification} alt="notification icon" />
                </div>

                <div className={styles.avatarNameContainer}>
                    <div className={styles.avatarContainer}>
                        <img src={userAvatar} alt="adedeji avatar" />
                    </div>
                    <div className={styles.nameContainer}>
                        <p className={styles.adedeji}>{firstName}</p>
                        <img className={styles.dropdownIcon} src={dropDownFilled} alt="dropdown icon" />
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navigation