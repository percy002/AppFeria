import { Link } from "@inertiajs/react";
import { Button } from "flowbite-react";
const DefaultButton = ({ text, url }) => {
    return (
        <Link href={url}>
            <Button
                size={"xs"}
                className="my-4 pt-0 px-4 bg-primary rounded-full text-white font-bold text-xl hover:bg-white enabled:hover:bg-white hover:text-primary border-4 enabled:hover:border-primary"
            >
                <span className="text-lg">{text}</span>
            </Button>
        </Link>
    );
};
export default DefaultButton;
