import { badgePercent, bank, briefcase, chartBar, coins, galaxy, handshake, loanProduct, loanRequest, loans, organization, piggyBank, preferences, scroll, tire, transaction, userCheck, userCog, userFriends, userTimes, users } from "../../assets/icons";


export const sidebarLinks = [
    {
        title: "CUSTOMERS",
        links: [
            { id: 0, to: '/dashboard/users', icon: userFriends, label: "Users" },
            { id: 1, to: '/dashboard/guarantors', icon: users, label: "Guarantors" },
            { id: 3, to: '/dashboard/loans', icon: loans, label: "Loans" },
            { id: 4, to: '/dashboard/decision-models', icon: handshake, label: "Decision Models" },
            { id: 5, to: '/dashboard/savings', icon: piggyBank, label: "Savings" },
            { id: 6, to: '/dashboard/loan-requests', icon: loanRequest, label: "Loan Requests" },
            { id: 7, to: '/dashboard/whitelist', icon: userCheck, label: "Whitelist" },
            { id: 8, to: '/dashboard/karma', icon: userTimes, label: "Karma" },
        ],
    },
    {
        title: "BUSINESSES",
        links: [
            { id: 0, to: '/dashboard/organization', icon: briefcase, label: "Organization" },
            { id: 1, to: '/dashboard/loan-products', icon: loanProduct, label: "Loan Products" },
            { id: 2, to: '/dashboard/savings-products', icon: bank, label: "Savings-products" },
            { id: 3, to: '/dashboard/fees-and-charges', icon: coins, label: "Fees and Charges" },
            { id: 4, to: '/dashboard/transactions', icon: transaction, label: "Transactions" },
            { id: 5, to: '/dashboard/services', icon: galaxy, label: "Services" },
            { id: 6, to: '/dashboard/service-account', icon: userCog, label: "Services Account" },
            { id: 7, to: '/dashboard/settlements', icon: scroll, label: "Settlements" },
            { id: 8, to: '/dashboard/reports', icon: chartBar, label: "Reports" },
        ],
    },
    {
        title: "SETTINGS",
        links: [
            { id: 0, to: '/dashboard/preferences', icon: preferences, label: "Preferences" },
            { id: 1, to: '/dashboard/fees-and-pricing', icon: badgePercent, label: "Fees and Pricing" },
            { id: 2, to: '/dashboard/audit-logs', icon: organization, label: "Audit Logs" },
            { id: 3, to: '/dashboard/system-messages', icon: tire, label: "System Messages" },
        ],
    },
]