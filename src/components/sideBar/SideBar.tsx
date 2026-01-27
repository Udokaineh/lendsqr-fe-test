import { NavLink, useNavigate } from "react-router-dom";
import { briefcase, dropDown, home, logout } from "../../assets/icons";
import { sidebarLinks } from "./constant";
import styles from "./Sidebar.module.scss"
import toast from "react-hot-toast";


interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideBar = ({ isOpen, onClose }: SidebarProps) => {
    const navigate = useNavigate();

    const handlesideItemClick = () => {
        onClose();
    };

    const handleLogout = () => {
        localStorage.removeItem("lendsqr_isLoggedIn");
        onClose();
        toast.success("Logged out successfully");
        navigate("/");
    };
    return (
        <>
            {isOpen && <div className={styles.overlay} onClick={onClose} />}
            <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
                <div className={styles.fixedTop}>
                    <div className={styles.switchContainer}>
                        <img src={briefcase} alt="briefcase icon" />
                        <span>Switch Organization</span>
                        <img className={styles.dropdownIcon} src={dropDown} alt="dropdown icon" />
                    </div>
                </div>

                <div className={styles.sideLinksContainer}>
                    <NavLink
                        to="/dashboard"
                        end onClick={handlesideItemClick}
                        className={({ isActive }) => isActive ? `${styles.dashboardLink} ${styles.active}` : styles.dashboardLink}
                    >
                        <img src={home} alt="home icon" />
                        <span>Dashboard</span>
                    </NavLink>

                    {sidebarLinks.map((section) => (
                        <div key={section.title} className={styles.linkContainer}>
                            <p>{section.title}</p>
                            {section.links.map((link) => (
                                <NavLink
                                    key={link.id}
                                    to={link.to}
                                    onClick={handlesideItemClick}
                                    className={({ isActive }) =>
                                        isActive ? `${styles.sidebarItem} ${styles.active}` : styles.sidebarItem
                                    }>
                                    <img src={link.icon} alt={`${link.label} icon`} />
                                    <span>{link.label}</span>
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </div>

                <div className={styles.logoutContainer}>
                    <div className={styles.logoutLink} onClick={handleLogout}>
                        <img src={logout} alt="logout icon" />
                        <span>Logout</span>
                    </div>
                    <p>v1.2.0</p>
                </div>
            </aside>
        </>
    )
}

export default SideBar;