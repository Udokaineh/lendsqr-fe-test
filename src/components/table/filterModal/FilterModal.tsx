import { dropDown } from '../../../assets/icons';
import InputComponent from '../../../components/input/Input';
import styles from "./FilterModal.module.scss"


const FilterModal = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className={styles.filterContainer} onClick={(e) => e.stopPropagation()}>
            <form className={styles.filterForm}>
                <InputComponent
                    label="Organization"
                    placeholder="Select"
                    options={[
                        { label: 'Lendsqr', value: 'lendsqr' },
                        { label: 'Irorun', value: 'irorun' }
                    ]}
                    suffix={<img src={dropDown} alt="down" />}
                />

                <InputComponent label="Username" placeholder="User" type="text" />

                <InputComponent label="Email" placeholder="Email" type="email" />

                <InputComponent label="Date" placeholder="Date" type="date" />

                <InputComponent label="Phone Number" placeholder="Phone Number" type="tel" />

                <InputComponent
                    label="Status"
                    placeholder="Select"
                    options={[
                        { label: 'Active', value: 'active' },
                        { label: 'Inactive', value: 'inactive' },
                        { label: 'Pending', value: 'pending' },
                        { label: 'Blacklisted', value: 'blacklisted' }
                    ]}
                    suffix={<img src={dropDown} alt="down" />}
                />

                <div className={styles.buttonGroup}>
                    <button type="button" className={styles.resetBtn} onClick={onClose}>
                        Reset
                    </button>
                    <button type="submit" className={styles.filterBtn}>
                        Filter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FilterModal;