import { Sidebar } from "flowbite-react";
import {
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiShoppingBag,
    HiTable,
    HiUser,
    HiOutlineMap,
} from "react-icons/hi";
import { Route, Routes, Link } from "react-router-dom";
import UserTable from "./Users/UsersTable";
const SideBarFB = () => {
    return (
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        {/* <Sidebar.Item icon={HiUser}> */}
                        <Link to={`dashboard/usuarios`} className="flex items-center"><HiUser/> Usuarios</Link>
                            
                        {/* </Sidebar.Item> */}

                        <Sidebar.Collapse
                            icon={HiShoppingBag}
                            label="Reservaciones"
                        >
                            <Sidebar.Item href="#">
                                Gobiernos Locales
                            </Sidebar.Item>
                            <Sidebar.Item href="#">Animales</Sidebar.Item>
                            <Sidebar.Item href="#">
                                Mypes y Cerámicos
                            </Sidebar.Item>
                            <Sidebar.Item href="#">Gastronomía</Sidebar.Item>
                            <Sidebar.Item href="#">
                                Gobierno Regional
                            </Sidebar.Item>
                            <Sidebar.Item href="#">Otros</Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Item href="#" icon={HiOutlineMap}>
                            Mapas
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiInbox}>
                            Configuraciones
                        </Sidebar.Item>

                        <Sidebar.Item href="#" icon={HiArrowSmRight}>
                            Cerrar sesión
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
    );
};
export default SideBarFB;
