import { Button } from "flowbite-react";
import Stand from "./Stand";

export default function ColumnaStands({ cantidad, inicio, orden }) {
    
    return (
        <Button.Group className="flex flex-col">
            {
                Array(cantidad)
                    .fill()
                    .map((_, index) => (
                        <Stand numero={orden == "desc" ? (inicio - index) : (index + inicio)} key={index + inicio} />
                    ))}
        </Button.Group>
    );
}
