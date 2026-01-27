import { Outlet } from "react-router-dom";
import { Container } from "../../components/container/Container";
import SideBar from "../../components/sideBar/SideBar";
import styles from "./Dashboard.module.scss"
import Navigation from "../../components/navigation/Navigation";
import { useState } from "react";
import { avatar } from "../../assets/images";


const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const adminUser = {
        firstName: "Admin",
        avatar: avatar,
    };

    return (
        <Container alt>
            <Navigation
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                firstName={adminUser.firstName}
                userAvatar={adminUser.avatar}
            />
            <main className={styles.main}>
                <section>
                    <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
                </section>

                <section className={styles.outletContainer}>
                    <Outlet context={{ searchTerm }} />
                </section>
            </main>
        </Container>
    );
}

export default Dashboard;