import { Button } from "flowbite-react";
import Stand from "./Stand";

export default function GroupStands({
    cantidad,
    inicio,
    orden,
    direction,
    color,
    stands,
    size
}) {
    if (orden === "desc") {
        stands = stands.reverse();
    }
    return (
        <>
            {stands && Array.isArray(stands) && (
                <Button.Group
                    className={`flex ${direction === "col" && "flex-col"}`}
                >
                    {Array(cantidad)
                        .fill()
                        .map((_, index) => (
                            <Stand
                                numero={
                                    orden == "desc"
                                        ? inicio - index
                                        : index + inicio
                                }
                                color={color}
                                stand={stands && stands[index]}
                                key={index + inicio}
                                size={size}
                            />
                        ))}
                </Button.Group>
            )}
        </>
    );
}
