import { useEffect, useState } from "react";

function RowClient({ cliente }) {
    const [approved, setApproved] = useState(false);
    const [evaluated, setevaluated] = useState(false);

    useEffect(() => {
        setApproved(cliente.approved);
    }, []);

    useEffect(() => {
        setevaluated(cliente.evaluated);
    }, []);

    const toggleAprobacion = async (clienteId) => {
        try {
            // Realizar la solicitud PUT utilizando Axios
            const response = await axios.put(
                `/cliente/${clienteId}/aprobar`,
                null
            );

            if (response.status === 200) {
                const data = response.data;
                setApproved(data.approved);
            } else {
                console.error(
                    "Error al cambiar el estado de aprobación del cliente:",
                    response.statusText
                );
            }
        } catch (error) {
            console.error(
                "Error al cambiar el estado de aprobación del cliente:",
                error
            );
        }
    };

    const toggleEvaluacion = async (clienteId) => {
        try {
            // Realizar la solicitud PUT utilizando Axios
            const response = await axios.put(
                `/cliente/${clienteId}/evaluar`,
                null
            );

            if (response.status === 200) {
                const data = response.data;
                setevaluated(data.approved);
            } else {
                console.error(
                    "Error al cambiar el estado de evaluación del cliente:",
                    response.statusText
                );
            }
        } catch (error) {
            console.error(
                "Error al cambiar el estado de evaluación del cliente:",
                error
            );
        }
    };
    return (
        <tr key={cliente.id}>
            <td className="px-6 py-4 whitespace-nowrap">{cliente.ruc}</td>
            <td className="px-6 py-4 whitespace-nowrap">
                {cliente.company_name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {cliente.name} {cliente.last_name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{cliente.dni}</td>
            <td className="px-6 py-4 whitespace-nowrap">{cliente.position}</td>
            <td className="px-6 py-4 whitespace-nowrap">{cliente.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">
                <input
                    type="checkbox"
                    checked={evaluated}
                    onChange={() => {
                        toggleEvaluacion(cliente.id);
                    }}
                />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <input
                    type="checkbox"
                    checked={approved}
                    onChange={() => {
                        toggleAprobacion(cliente.id);
                    }}
                />
            </td>
        </tr>
    );
}
export default RowClient;
