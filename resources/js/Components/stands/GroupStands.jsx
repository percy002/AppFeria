import { Button } from "flowbite-react";
import Stand from "./Stand";

export default function GroupStands({
    cantidad,
    inicio,
    orden,
    direction,
    color,
    borderColor,
    stands,
    small
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
                                borderColor={borderColor}
                                stand={stands && stands[index]}
                                key={index + inicio}
                                small={small}
                            />
                        ))}
                </Button.Group>
            )}
        </>
    );
}
