import { Table } from "flowbite-react";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import UserRow from "./UserRow";
const UserTable = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        axios
            .get(route("users.listUsers"))
            .then((response) => {
                setUsers(response.data.users);
            })
            .catch((error) => {
                Swal({
                    title: "Error",
                    text: "ah ocurrido un error",
                    icon: "error",
                });
            });
    }, []);
    return (
        <div className="overflow-x-auto w-full">
            <Table striped>
                <Table.Head>
                    <Table.HeadCell align="center">Nombre</Table.HeadCell>
                    <Table.HeadCell align="center">Email</Table.HeadCell>
                    <Table.HeadCell align="center">Rol</Table.HeadCell>
                    <Table.HeadCell align="center">Opciones
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {users &&
                        users.length > 0 &&
                        users.map((user) => (
                            <UserRow user={user} />
                        ))}
                    
                </Table.Body>
            </Table>
        </div>
    );
};

export default UserTable;
