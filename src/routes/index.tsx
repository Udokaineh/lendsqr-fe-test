import ComingSoon from "../components/comingSoon/ComingSoon";
import Overview from "../pages/dashboard/subRoutes/overview/Overview";
import Users from "../pages/dashboard/subRoutes/users/Users";
import UserDetails from "../pages/dashboard/subRoutes/users/userDetails/UserDetails";


const Routes = () => {

    const dashboardSubRoutes = [
        {
            index: true,
            element: <Overview />,
        },
        {
            path: "/dashboard/users",
            element: <Users />,
        },
        {
            path: "/dashboard/users/:id",
            element: <UserDetails />,
        },
        {
            path: "/dashboard/*",
            element: <ComingSoon />,
        },

    ]
    return { dashboardSubRoutes }
}


export default Routes;