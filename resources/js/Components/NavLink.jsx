import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-8 pt-1 border-b-4 text-sm font-medium leading-2 transition duration-150 ease-in-out focus:outline-none' +
                (active
                    ? 'border-primary text-gray-900 focus:border-indigo-700 bg-primary '
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-primary focus:text-gray-700 focus:border-primary bg-transparent') +
                className
            }
        >
            {children}
        </Link>
    );
}
