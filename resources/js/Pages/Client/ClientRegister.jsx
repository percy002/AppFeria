import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

export default function ClientRegister() {
    const { data, setData, post, processing, errors, reset } = useForm({
        selectedType: 'DNI',
        numberId: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('client.register'));
    };

    const handleTypeChange = (event) => {
        const { value } = event.target;
        setData('selectedType', value);
    };


    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>

                <div className='flex gap-6 my-2'>
                    <div className="">
                        <input
                            type="radio"
                            id="dni"
                            name="identificationType"
                            value="DNI"
                            checked={data.selectedType === 'DNI'}
                            onChange={handleTypeChange}
                            className='mx-1'
                        />
                        <label htmlFor="dni">DNI</label>
                    </div>
                    <div className="">
                        <input
                            type="radio"
                            id="ruc"
                            name="identificationType"
                            value="RUC"
                            checked={data.selectedType === 'RUC'}
                            onChange={handleTypeChange}
                            className='mx-1'
                        />
                        <label htmlFor="ruc">RUC</label>
                    </div>
                </div>
                <div>
                    <InputLabel htmlFor="numberId" value={data.selectedType === 'DNI' ? 'DNI' : 'RUC'} />

                    <TextInput
                        id="numberId"
                        name="numberId"
                        value={data.numberId}
                        className="mt-1 block w-full"
                        autoComplete="numberId"
                        isFocused={true}
                        onChange={(e) => setData('numberId', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Razon Social/Nombre" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Correo Electronico" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Contraseña" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="off"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirmar Contraseña" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="off"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('client.login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        ¿Ya esta registrado ?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Registrar
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
