import { Table, Select, Button } from "flowbite-react";
import ModalUpdateUser from "./ModalUpdateUser";
import { useState } from "react";
const UserRow = ({ user }) => {
    const [userRow, setUserRow] = useState(user);
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell
                className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                align="center"
            >
                {userRow.name}
            </Table.Cell>
            <Table.Cell align="center">{userRow.email}</Table.Cell>
            <Table.Cell align="center">{userRow.rol}</Table.Cell>
            <Table.Cell align="center">
                <div className="flex flex-nowrap justify-center gap-1">
                    <ModalUpdateUser updateUsers={setUserRow} user={userRow} />
                    <Button color="warning" size={"md"}>Inhabilitar Usuario</Button>
                </div>
            </Table.Cell>
        </Table.Row>
    );
};
export default UserRow;
