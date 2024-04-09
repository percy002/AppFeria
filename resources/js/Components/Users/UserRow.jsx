import { Table,Select } from "flowbite-react";
const UserRow = ({ user }) => {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell
                className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                align="center"
            >
                {user.name}
            </Table.Cell>
            <Table.Cell align="center">{user.email}</Table.Cell>
            <Table.Cell align="center">
                <div className="max-w-md">                    
                    <Select id="countries">
                        <option>Administrador</option>
                        <option>Aprobación</option>
                        <option>Caja</option>
                        <option>Help Desk</option>
                    </Select>
                </div>
            </Table.Cell>
            <Table.Cell align="center">
                <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                    Editar
                </a>
            </Table.Cell>
        </Table.Row>
    );
};
export default UserRow;
