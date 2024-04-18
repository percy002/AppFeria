<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        <script src="https://checkout.culqi.com/js/v4"></script>
        <script>
            Culqi.publicKey = 'pk_test_d31d0bc237c6f16f';

            
            // function culqi() {
            //     if (Culqi.token) {  // ¡Objeto Token creado exitosamente!
            //     const token = Culqi.token.id;
            //     console.log('Se ha creado un Token: ', token);
            //     //En esta linea de codigo debemos enviar el "Culqi.token.id"
            //     //hacia tu servidor con Ajax
            //     $.ajax({
            //             url:"procesar_pago.php",
            //             type:"POST",
            //             data:{
            //                 token:token
            //             }
            //         }).done(function(resp){
            //             console.log(resp);
            //     });
            //     } else if (Culqi.order) {  // ¡Objeto Order creado exitosamente!
            //     const order = Culqi.order;
            //     console.log('Se ha creado el objeto Order: ', order);

            //     } else {
            //     // Mostramos JSON de objeto error en consola
            //     console.log('Error : ',Culqi.error);
            //     }
            // }
        </script>
        
        @inertia
    </body>
</html>
