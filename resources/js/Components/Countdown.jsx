import React, { useState, useEffect } from 'react';

function Countdown({time}) {
    // Inicializa el tiempo restante a 2 horas en segundos
    const [timeLeft, setTimeLeft] = useState(parseInt(time) * 60 * 60);

    useEffect(() => {
        // Sal de aquí si el tiempo restante es 0
        if (timeLeft <= 0) {
            return;
        }

        // Crea un intervalo que se ejecuta cada segundo
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    // Calcula las horas, minutos y segundos restantes
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return (
        <div>
            Tiempo restante: {hours}:{minutes}:{seconds}
        </div>
    );
}

export default Countdown;