import { User } from "../../../../../../types";
import styles from "./Header.module.scss"
import { Star } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: User
}

const UserDetailsHeader = ({ activeTab, setActiveTab, user }: HeaderProps) => {

  const tabs = ['General Details', 'Documents', 'Bank Details', 'Loans', 'Savings', 'App and System'];

  return (
    <div className={styles.headerContainer}>
      <div className={styles.topSection}>
        <div className={styles.profileSummary}>
          <div className={styles.avatar}>
            <img src={user.profile.avatar} alt="User Avatar" />
          </div>
          <div className={styles.nameBlock}>
            <h2>{user.profile.firstName} {user.profile.lastName}</h2>
            <p>{user.id}</p>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.tierSection}>
          <p>User's Tier</p>
          <div className={styles.stars}>
            {[1, 2, 3].map((star) => (
              <Star
                key={star}
                size={16}
                fill={star <= user.tier ? "#E9B200" : "none"}
                color="#E9B200"
              />
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.balanceSection}>
          <h2>₦{Number(user.accountBalance).toLocaleString(undefined, { minimumFractionDigits: 2 })}</h2>
          <p>{user.accountNumber}/{user.bankName}</p>
        </div>
      </div>

      {/* Navigation Tabs with Swipe Indicator */}
      <div className={styles.tabBarContainer}>
        <div className={styles.tabBar}>
          {tabs.map((tab) => (
            <button key={tab} className={activeTab === tab ? styles.activeTab : ''}
              onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsHeader;