# Lendsqr Admin Dashboard Implementation Documentation

## 1. Project Overview
This project is a high-fidelity recreation of the Lendsqr Admin Dashboard. It serves as a tool for managing a large user base (500+ users), featuring user listing, detailed profiling, and status management.

---

## 2. Technical Decisions & Rationales

### Data Architecture (LocalStorage + Mock API)
**Decision:** I implemented a hybrid approach using a local `users.json` file and `localStorage`.

**Reason:** Since the task requires persistence (like blacklisting a user), relying solely on a JSON file wasn't enough. By syncing JSON data to `localStorage` on the first load, I ensured that status changes (Active/Blacklisted) persist across page refreshes, mimicking a real database.

### State Management
**Decision:** Lifted the user state to the parent `Users.tsx` component and passed data down via props.

**Reason:** This ensures that when a user is blacklisted in the `UserTable`, the `Summary` cards (showing total active/blacklisted users) update instantly without needing a page reload.

### Responsiveness & UX Transitions
**Decision:** Integrated a 600ms artificial delay for the loading spinner.

**Reason:** In a local environment, data loads instantly. I added a controlled delay to demonstrate the Loading UI state, which provides a better user experience and shows the application is "thinking" a common pattern in enterprise fintech apps.

---

## 3. Comparison with Design & Lendsqr Console

### Sidebar Navigation
**My Approach:** I made the "Switch Organization" header fixed at the top while allowing the rest of the navigation (including the Dashboard link) to scroll.

**The Argument:** In the actual Lendsqr console, the organization switcher is a critical context setter. By keeping it pinned, the admin always knows which branch/org they are managing, even when navigating deep into the "Settings" or "Service Account" links at the bottom of a long sidebar.

### Status Management (Toast Notifications)
**My Approach:** Added dynamic `react-hot-toast` notifications for actions like "Blacklisting" or "Activating."

**The Argument:** The static design doesn't show feedback loops. I chose to add toasts because, in a high stakes financial dashboard, an admin needs immediate, non-intrusive confirmation that a destructive action (like blacklisting) was successful.

### Fallback & Error States
**My Approach:** Implemented a custom 404/Empty State for "User Not Found."

**The Argument:** While not explicitly in the Figma design, real world apps encounter broken links or deleted IDs. I designed a branded fallback page to prevent the app from crashing and to provide a "Go Back" path, maintaining the professional feel of the dashboard.

---

## 4. Key Features Implemented
* **Authentication:** Simulated login with persistence.
* **Dynamic Routing:** Used `react-router-dom` for deep linking into User Details (`/users/:id`).
* **Filtering:** Multi-criteria search (Username, Email, Organization).
* **Pagination:** Custom logic to handle large datasets (500 users) divided into manageable chunks.
* **SCSS Modules:** Used for scoped styling to prevent class name collisions and ensure maintainability.

---

## 5. How to Run
1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Login with any email/password.