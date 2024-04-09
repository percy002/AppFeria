import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TableClients from "@/Components/Clients/TableClients";
import { FeriaHuancaroMap } from "@/Components/stands/FeriaHuancaroMap/FeriaHuancaroMap";
import SideBarFB from "@/Components/SideBar";
import {
    BrowserRouter as Router,
    Outlet,
    Routes,
    Route,
} from "react-router-dom";
import UserTable from "@/Components/Users/UsersTable";

export default function Dashboard({ auth, userRoles, clientes }) {
    return (
        <AuthenticatedLayout user={auth.user} client={auth.cliente}>
            <Head title="Panel de Control" />
            {userRoles == "client" && (
                <div className="">
                    <FeriaHuancaroMap />
                </div>
            )}
            {userRoles != "client" && (
                <Router>
                    <div className="flex">
                        <SideBarFB />
                        <Routes>
                            <Route path="dashboard/usuarios" element={<UserTable />} />
                        </Routes>
                        {/* <Outlet /> */}
                    </div>
                </Router>
            )}
        </AuthenticatedLayout>
    );
}
