import { useState } from 'react';
import InputComponent from '../../components/input/Input';
import styles from './Login.module.scss';
import logo from '../../assets/logo.svg';
import { loginImage } from '../../assets/images';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        localStorage.setItem("lendsqr_isLoggedIn", "true");
        toast.success("Login successful!");
        navigate("/dashboard/users");
    };

    return (
        <div className={styles.loginContainer}>
            {/* Left Side: Illustration */}
            <div className={styles.illustrationSection}>
                <div className={styles.logoWrapper}>
                    <img src={logo} alt="lendsqr logo" />
                </div>
                <div className={styles.heroImg}>
                    <img src={loginImage} alt="Welcome illustration" />
                </div>
            </div>

            {/* Right Side: Form */}
            <div className={styles.formSection}>
                <div className={styles.formWrapper}>
                    <div className={styles.header}>
                        <h1>Welcome!</h1>
                        <p>Enter details to login.</p>
                    </div>

                    <form className={styles.form} onSubmit={handleLogin}>
                        <InputComponent
                            label=""
                            type="email"
                            placeholder="Email"
                        />

                        <InputComponent
                            label=""
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            suffix={
                                <span
                                    className={styles.togglePassword}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "HIDE" : "SHOW"}
                                </span>
                            }
                        />

                        <a href="#" className={styles.forgotPassword}>
                            FORGOT PASSWORD?
                        </a>

                        <button type="submit" className={styles.loginBtn}>
                            LOG IN
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;