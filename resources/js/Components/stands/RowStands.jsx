import { Button } from "flowbite-react";
import Stand from "./Stand";

export default function RowStands({ cantidad, inicio, orden }) {
    if (orden === "desc") {
        
    }
    return (
        <Button.Group className="">
            {
                Array(cantidad)
                    .fill()
                    .map((_, index) => (
                        <Stand numero={index + inicio} key={index + inicio} />
                    ))}
        </Button.Group>
    );
}
