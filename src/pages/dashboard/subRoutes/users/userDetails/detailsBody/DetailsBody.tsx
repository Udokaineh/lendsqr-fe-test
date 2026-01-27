import { User } from "../../../../../../types";
import Documents from "./documents/Documents";
import GeneralDetails from "./generalDetails/GeneralDetails"

const DetailsBody = ({ activeTab, user }: { activeTab: string, user: User }) => {
    switch (activeTab) {
        case 'General Details':
            return <GeneralDetails user={user} />;
        case 'Documents':
            return <Documents />;
        case 'Bank Details':
            return <div style={{ padding: '20px' }}>Bank Details Content</div>;
        case 'Loans':
            return <div style={{ padding: '20px' }}>Loans Content</div>;
        case 'Savings':
            return <div style={{ padding: '20px' }}>Savings Content</div>;
        case 'App and System':
            return <div style={{ padding: '20px' }}>App and System Content</div>;
        default:
            return <GeneralDetails user={user} />;
    }
};

export default DetailsBody;