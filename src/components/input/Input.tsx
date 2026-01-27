import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
    label: string;
    options?: { label: string; value: string }[];
    suffix?: React.ReactNode;
}

const InputComponent = ({ label, type, placeholder, options, suffix, ...props }: InputProps) => {
    return (
        <div className={styles.inputGroup}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.inputWrapper}>
                {options ? (
                    <select className={styles.field} {...(props as any)}>
                        <option value="" disabled selected hidden>{placeholder}</option>
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                ) : (
                    <input
                        type={type}
                        placeholder={placeholder}
                        className={styles.field}
                        {...(props as any)}
                    />
                )}
                {suffix && <div className={styles.suffix}>{suffix}</div>}
            </div>
        </div>
    );
};

export default InputComponent;