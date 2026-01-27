
import { useNavigate } from "react-router-dom";
import CustomPagination from "../../../../../../components/pagination/CustomPagination";
import TableComponent, { Column } from "../../../../../../components/table/Table";
import styles from "./UserTable.module.scss"
import { activeUser, blacklistIcon, viewIcon } from "../../../../../../assets/icons";
import { User } from "../../../../../../types";
import { useOutletContext } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";


interface ContextType {
    searchTerm: string;
}

interface UserTableProps {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserTable = ({ users, setUsers }: UserTableProps) => {
    // Catch the searchTerm from the Dashboard "portal"
    const { searchTerm } = useOutletContext<ContextType>();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const navigate = useNavigate();


    const filteredUsers = users.filter((user) => {
        const searchLower = searchTerm.toLowerCase();
        return (
            user.username.toLowerCase().includes(searchLower) ||
            user.email.toLowerCase().includes(searchLower) ||
            user.organization.toLowerCase().includes(searchLower)
        );
    });

    const currentTableData = filteredUsers.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    )

    const handleview = (id: string) => {
        navigate(`/dashboard/users/${id}`);
    };

    const handleStatusChange = (user: User, newStatus: 'Blacklisted' | 'Active') => {
        if (!users) return;


        if (user.status === newStatus) {
            toast.error(`User is already ${newStatus.toLowerCase()}`);
            return;
        }
        const allUsers: User[] = JSON.parse(localStorage.getItem("lendsqr_users") || "[]");

        const updatedUsers = allUsers.map(u =>
            u.id === user.id ? { ...u, status: newStatus } : u
        );

        setUsers(updatedUsers);

        localStorage.setItem("lendsqr_users", JSON.stringify(updatedUsers));
        if (newStatus === 'Active') {
            toast.success(`${user.profile.firstName} has been activated`);
        } else {
            toast.error(`${user.profile.firstName} has been blacklisted`);
        }
    };

    const menuOptions = [
        {
            label: 'View Details',
            icon: <img src={viewIcon} alt="view icon" />,
            onClick: (row: User) => handleview(row.id),
        },
        {
            label: 'Blacklist User',
            icon: <img src={blacklistIcon} alt="blacklist icon" />,
            onClick: (row: User) => handleStatusChange(row, 'Blacklisted'),
        },
        {
            label: 'Activate User',
            icon: <img src={activeUser} alt="active user icon" />,
            onClick: (row: User) => handleStatusChange(row, 'Active'),
        },
    ];

    const columns: Column<User>[] = [
        { header: 'ORGANIZATION', key: 'organization' },
        { header: 'USERNAME', key: 'username' },
        { header: 'EMAIL', key: 'email' },
        { header: 'PHONE NUMBER', key: 'phoneNumber' },
        { header: 'DATE JOINED', key: 'dateJoined' },
        {
            header: 'STATUS',
            key: 'status',
            render: (value: string) => (
                <span className={`${styles.statusBadge} ${styles[value.toLowerCase()]}`}>
                    {value}
                </span>
            )
        },
    ];


    return (
        <div className={styles.main}>
            <TableComponent
                columns={columns}
                data={currentTableData}
                actionOptions={menuOptions}
            />
            <CustomPagination
                totalItems={filteredUsers.length}
                itemsPerPage={10}
                currentPage={currentPage}
                pageCount={Math.ceil(users.length / 10)}
                onPageChange={(data) => setCurrentPage(data.selected)}
            />
        </div>
    )
}

export default UserTable;