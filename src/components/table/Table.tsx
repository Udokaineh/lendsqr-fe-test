import { useState } from "react";
import { filter, moreIcon } from "../../assets/icons";

import styles from "./Table.module.scss";
import TableActionMenu, { MenuOption } from "./actionMenu/ActionMenu";
import FilterModal from "./filterModal/FilterModal";

export interface Column<T> {
    header: string;
    key: Extract<keyof T, string>;
    render?: (value: any, row: T) => React.ReactNode;
}

interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    onRowClick?: (row: T) => void;
    actionOptions?: MenuOption[];
}

const TableComponent = <T extends { id?: string }>({
    columns,
    data,
    onRowClick,
    actionOptions
}: TableProps<T>) => {

    const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.header}>
                                <div className={styles.headerContent}>
                                    {col.header}
                                    <img src={filter} alt="filter icon"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsFilterOpen(!isFilterOpen);
                                        }}
                                    />
                                    {isFilterOpen && col.key === 'organization' && (
                                        <FilterModal onClose={() => setIsFilterOpen(false)} />
                                    )}
                                </div>
                            </th>
                        ))}
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={row.id || rowIndex}
                            onClick={() => onRowClick && onRowClick(row)}>
                            {columns.map((col) => (
                                <td key={col.key}>
                                    {col.render ? col.render(row[col.key as keyof T], row) : (row[col.key as keyof T] as React.ReactNode)}
                                </td>
                            ))}
                            <td className={styles.actionCell}>
                                <img
                                    className={styles.actionIcon}
                                    src={moreIcon}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const rowId = row.id ?? "";
                                        setActiveMenuId(activeMenuId === rowId ? null : rowId);
                                    }}
                                />
                                {activeMenuId === row.id && actionOptions && (
                                    <TableActionMenu
                                        options={actionOptions}
                                        row={row}
                                        onClose={() => setActiveMenuId(null)}
                                    />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;