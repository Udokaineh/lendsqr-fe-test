import styles from './ActionMenu.module.scss';

export interface MenuOption {
    label: string;
    icon: React.ReactNode;
    onClick?: (row: any) => void;
}

interface ActionMenuProps {
    options: MenuOption[];
    row: any;
    onClose: () => void;
}

const TableActionMenu = ({ options, row, onClose }: ActionMenuProps) => {
    return (
        <div className={styles.dropdown} onClick={(e) => e.stopPropagation()}>
            {options.map((option, index) => (
                <button
                    key={index}
                    className={styles.menuItem}
                    onClick={() => {
                        option.onClick?.(row);
                        onClose();
                    }}
                >
                    {option.icon}
                    <span>{option.label}</span>
                </button>
            ))}
        </div>
    );
};

export default TableActionMenu;