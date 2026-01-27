export interface User {
    id: string;
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
    hasLoan: boolean;
    hasSavings: boolean;
    profile: {
        firstName: string;
        lastName: string;
        avatar: string;
        phoneNumber: string;
        bvn: string;
        gender: string;
        maritalStatus: string;
        children: string;
        typeOfResidence: string;
    };
    education: {
        level: string;
        employmentStatus: string;
        sector: string;
        duration: string;
        officeEmail: string;
        monthlyIncome: string[];
        loanRepayment: string;
    };
    socials: {
        twitter: string;
        facebook: string;
        instagram: string;
    };
    guarantor: {
        firstName: string;
        lastName: string;
        phoneNumber: string;
        email: string;
        relationship: string;
    };
    accountBalance: string;
    accountNumber: string;
    bankName: string;
    tier: number;
}