import { User } from '../../../../../../../types';
import styles from './GeneralDetails.module.scss';

const InfoGroup = ({ label, value }: { label: string; value: string }) => (
    <div className={styles.infoGroup}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
    </div>
);

const GeneralDetails = ({ user }: { user: User }) => {
    return (
        <div className={styles.detailsContainer}>
            {/* Personal Information Section */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Personal Information</h3>
                <div className={styles.grid}>
                    <InfoGroup label="FULL NAME" value={`${user.profile.firstName} ${user.profile.lastName}`} />
                    <InfoGroup label="PHONE NUMBER" value={user.profile.phoneNumber} />
                    <InfoGroup label="EMAIL ADDRESS" value={user.email} />
                    <InfoGroup label="BVN" value={user.profile.bvn} />
                    <InfoGroup label="GENDER" value={user.profile.gender} />
                    <InfoGroup label="MARITAL STATUS" value={user.profile.maritalStatus} />
                    <InfoGroup label="CHILDREN" value={user.profile.children} />
                    <InfoGroup label="TYPE OF RESIDENCE" value={user.profile.typeOfResidence} />
                </div>
            </section>

            <hr className={styles.divider} />

            {/* Education and Employment Section */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Education and Employment</h3>
                <div className={`${styles.grid} ${styles.educationGrid}`}>
                    <InfoGroup label="LEVEL OF EDUCATION" value={user.education.level} />
                    <InfoGroup label="EMPLOYMENT STATUS" value={user.education.employmentStatus} />
                    <InfoGroup label="SECTOR OF EMPLOYMENT" value={user.education.sector} />
                    <InfoGroup label="DURATION OF EMPLOYMENT" value={user.education.duration} />
                    <InfoGroup label="OFFICE EMAIL" value={user.education.officeEmail} />
                    <InfoGroup label="MONTHLY INCOME" value={`₦${user.education.monthlyIncome[0]} - ₦${user.education.monthlyIncome[1]}`} />
                    <InfoGroup label="LOAN REPAYMENT" value={user.education.loanRepayment} />
                </div>
            </section>

            <hr className={styles.divider} />

            {/* Socials Section */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Socials</h3>
                <div className={styles.grid}>
                    <InfoGroup label="TWITTER" value={user.socials.twitter} />
                    <InfoGroup label="FACEBOOK" value={user.socials.facebook} />
                    <InfoGroup label="INSTAGRAM" value={user.socials.instagram} />
                </div>
            </section>

            <hr className={styles.divider} />

            {/* Guarantor Section */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Guarantor</h3>
                <div className={styles.grid}>
                    <InfoGroup label="FULL NAME" value={`${user.guarantor.firstName} ${user.guarantor.lastName}`} />
                    <InfoGroup label="PHONE NUMBER" value={user.guarantor.phoneNumber} />
                    <InfoGroup label="EMAIL ADDRESS" value={user.guarantor.email} />
                    <InfoGroup label="RELATIONSHIP" value={user.guarantor.relationship} />
                </div>
            </section>
        </div>
    );
};

export default GeneralDetails;