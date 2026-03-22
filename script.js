document.addEventListener('DOMContentLoaded', () => {
    // 1. CONFIGURACIÓN DEL CONTADOR (Pon tu fecha aquí)
    const fechaInicio = new Date('2025-01-01T00:00:00'); 
    const contadorTexto = document.getElementById('contador');

    function actualizarContador() {
        const ahora = new Date();
        const diff = ahora - fechaInicio;
        const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / 1000 / 60) % 60);
        const segs = Math.floor((diff / 1000) % 60);
        contadorTexto.innerText = `Llevamos juntos: ${dias}d ${horas}h ${mins}m ${segs}s`;
    }
    setInterval(actualizarContador, 1000);

    // 2. GENERACIÓN DE FLORES
    const arbol = document.getElementById('arbol-flores');
    const totalFlores = 40; // Cantidad de flores

    for (let i = 0; i < totalFlores; i++) {
        const flor = document.createElement('img');
        
        // Elige aleatoriamente entre azul y blanca
        flor.src = Math.random() > 0.5 ? 'flor_azul.png' : 'flor_blanca.png';
        flor.classList.add('flor-img');

        // Posiciones aleatorias para formar la copa del árbol
        const x = Math.random() * 200 - 100 + 150; // Centrado
        const y = Math.random() * 200; // Altura de la copa

        flor.style.left = `${x}px`;
        flor.style.top = `${y}px`;
        
        // Retraso para que no aparezcan todas de golpe
        flor.style.animationDelay = `${Math.random() * 3}s`;

        arbol.appendChild(flor);
    }
});
