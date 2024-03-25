export const Clients = () => {
    return (
        <div>
            <AuthenticatedLayout user={auth.user} client={auth.cliente}>
                <Head title="Clientes" />
                <TableClients clientes={clientes} />

            </AuthenticatedLayout>
        </div>
    );
};
