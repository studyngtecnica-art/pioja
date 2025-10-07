// --- 1. DEFINICIÓN DE LOS DATOS (9 CANCIONES EN TOTAL) ---
const DATOS_MUSICALES = [
    {
        id: 'cancion1',
        titulo: 'Paciencia',
        letra: "Yo me pasaba escuchando esta cancion,esperando todo septiembre ese algo\nque pueda cambiar mi vida como decia la cancion,espere\ngran parte de septiembre hasta que por fin\nllegaste vos a mi vida para abrirme los ojos y ver el sol",
        fotoUrl: 'paciencia.jfif',
        audioUrl: 'Paciencia.mp3',
        bgColor: '#adb813ff' // Azul claro y suave
    },
    {
        id: 'cancion2',
        titulo: 'Tu parte de adelante',
        letra: "Te puedo jurar que esta cancion describe todo lo que quiero ser en tu vida y mas,\nescucho esta cancion y deseo ser todo para vos en tu vida",
        fotoUrl: 'honestidad brutal.jfif',
        audioUrl: 'La parte de adelante.mp3',
        bgColor: '#971212ff' // Durazno, cálido
    },
    {
        id: 'cancion3',
        titulo: 'Hacer un puente',
        letra: "El puente para mi refleja la conexion y como la persona esta dispuesta a cruzarlo solamente por la otra persona\n,te digo desde ya que quiero cruzar ese puente hacia vos dejando todo miedo,llevando\nsolamente amor y solo para vos",
        fotoUrl: 'Puente.jfif',
        audioUrl: 'Hacer un puente.mp3',
        bgColor: '#B5EAD7' // Menta, fresco
    },
    {
        id: 'cancion4',
        titulo: 'Me gusta',
        letra: "Esta cancion describe a la perfeccion la conexion que siento con vos y todo tu hermoso ser,algo que la posta\nme hace sentir muy para vos",
        fotoUrl: 'ciro 27.jfif',
        audioUrl: 'Ciro - 27 - Me gusta.mp3',
        bgColor: '#181616ff' // Rosa pálido
    },
    {
        id: 'cancion5',
        titulo: 'Puesto',
        letra: "Esta cancion la verdad es que no tiene nada entre comillas,pero la posta es que las veces que pienso en vos cuando la escucho\nya son incontables para mi,tiene una melodia tan suave,hermosa y atrapante como cada palabra que me decis",
        fotoUrl: 'Puesto.jfif',
        audioUrl: 'Puesto.mp3',
        bgColor: '#272746ff' // Lavanda suave
    },
    {
        id: 'cancion6',
        titulo: 'Me gustas mucho',
        letra: "me encanta y te la dedicaria toda la vida",
        fotoUrl: 'Me gustas mucho.jfif',
        audioUrl: 'Me gustas mucho.mp3',
        bgColor: '#b9bbbdff' // Azul Alicia (muy claro)
    },
    {
        id: 'cancion7',
        titulo: 'Bastara',
        letra: "estos dias en los que estuvimos conociendolos te juro que cada dia es como amanecer con un hermoso sol\nsabiendo que vos sos parte de mi vida,incluso te digo que,SOS MI SOL,nadie me ilumina tanto como lo haces vos",
        fotoUrl: 'Bastara.jfif',
        audioUrl: 'Bastara.mp3',
        bgColor: '#31b7cfff' // Rosa chicle
    },
    {
        id: 'cancion8',
        titulo: 'Labios Rotos',
        letra: "ESTA CANCION ES TAN,dioss,yo se que ya lo dije mucho pero es que todas estas canciones me hacen pensar tanto en vos de una manera tan magica e inexplicable\nposta que no entiendo nada,pero te re amo por todo lo que me generas",
        fotoUrl: 'Labios Rotos.jfif',
        audioUrl: 'Labios Rotos.mp3',
        bgColor: '#260eadff' // Amarillo pastel
    },
    {
        id: 'cancion9',
        titulo: 'Loca',
        letra: "ya me re sali del orden,y escribo a lo loco,pero no hay nada mas loco que vos pedazo de loca,te amo te amo te amo\npodria llenar la pagina de te amos solamente para vos,pero cierto que hablabamos de las canciones\nte amo mi loquita pioja",
        fotoUrl: 'Loca.jfif',
        audioUrl: 'Loca.mp3',
        bgColor: '#070068ff' // Azul cielo
    }

    ,{
        id: 'cancion10',
        titulo: 'Tus Ojos',
        letra: "todas las canciones las estuve escuchando para expresarte todo lo que siento al escucharlas\nAMO,AMO,AMO esta cancion,pero te recontra re amo a vos y todotodo de vos lo amo con todo mi corazon,esta cancion re va\npara describir casi todo lo que me generan tus ojos a todo mi ser y mi mente,posta pareces angel caido del cielo y te re amo por eso mi hermosa pioja",
        fotoUrl: 'Tus Ojos.jfif',
        audioUrl: 'Tus Ojos.mp3',
        bgColor: '#0063a5ff' // Azul cielo
    }
];


// --- 2. OBTENER ELEMENTOS DEL DOM ---
const pantallas = document.querySelectorAll('.pantalla');
const btnComenzar = document.getElementById('btn-comenzar');

const detalleTitulo = document.getElementById('titulo-cancion');
const detalleFoto = document.getElementById('foto-cancion');
const detalleLetra = document.getElementById('letra-cancion');
const detalleAudio = document.getElementById('audio-cancion');
const btnVolverSelector = document.getElementById('btn-volver-selector');
const btnSiguienteCancion = document.getElementById('btn-siguiente-cancion');

let cancionActualIndex = -1; 
const COLOR_FONDO_INICIAL = '#f4f4f9';


// --- 3. FUNCIÓN DE NAVEGACIÓN ---
function cambiarPantalla(idDestino) {
    pantallas.forEach(pantalla => {
        if (pantalla.id === idDestino) {
            pantalla.classList.remove('oculta');
            pantalla.classList.add('activa');
        } else {
            pantalla.classList.remove('activa');
            pantalla.classList.add('oculta');
        }
    });
}


// --- 4. FUNCIÓN INICIAR EXPERIENCIA ---
function iniciarExperiencia() {
    cargarDetalle(0); 
}


// --- 5. CARGAR PANTALLA DE DETALLE ---
function cargarDetalle(index) {
    // Si intenta ir más allá, volvemos al inicio
    if (index >= DATOS_MUSICALES.length) {
        document.body.style.backgroundColor = COLOR_FONDO_INICIAL; 
        return cambiarPantalla('pantalla-inicio');
    }

    const cancion = DATOS_MUSICALES[index];
    cancionActualIndex = index; 
    
    if (cancion) {
        detalleAudio.pause();
        
        // Aplicar el color de fondo con transición
        document.body.style.backgroundColor = cancion.bgColor; 
        
        // Cargar Contenido
        detalleTitulo.textContent = cancion.titulo;
        detalleFoto.src = cancion.fotoUrl;
        detalleLetra.textContent = cancion.letra;
        detalleAudio.src = cancion.audioUrl;
        detalleAudio.load();

        // LÓGICA DEL BOTÓN AL FINAL DE LAS CANCIONES
        const haySiguiente = (index + 1) < DATOS_MUSICALES.length;
        
        btnSiguienteCancion.classList.remove('oculta'); 
        btnSiguienteCancion.onclick = null; 
        
        if (haySiguiente) {
            // Caso Normal: Hay más canciones
            btnSiguienteCancion.textContent = `Siguiente Canción: ${DATOS_MUSICALES[index + 1].titulo}`;
            btnSiguienteCancion.onclick = irASiguienteCancion; 
        } else {
            // Caso Final: No hay más canciones (Última canción)
            btnSiguienteCancion.textContent = '🎶 Volver al Inicio'; 
            btnSiguienteCancion.onclick = volverAInicioDesdeDetalle; 
        }
        
        cambiarPantalla('pantalla-detalle');

        // Ocultamos el botón "Volver a Seleccionar"
        btnVolverSelector.classList.add('oculta');
    }
}

// 6. FUNCIÓN AUXILIAR PARA IR A LA SIGUIENTE CANCIÓN
function irASiguienteCancion() {
    detalleAudio.pause(); 
    cargarDetalle(cancionActualIndex + 1);
}

// 7. FUNCIÓN AUXILIAR PARA VOLVER AL INICIO DESDE DETALLE
function volverAInicioDesdeDetalle() {
    detalleAudio.pause();
    document.body.style.backgroundColor = COLOR_FONDO_INICIAL; 
    cambiarPantalla('pantalla-inicio');
}


// --- 8. ASIGNACIÓN DE EVENTOS ---

// Pantalla de Inicio -> Detalle de la Primera Canción
btnComenzar.addEventListener('click', iniciarExperiencia);

// Volver a Inicio (Desde cualquier botón que lo invoque)
document.querySelectorAll('.btn-volver-inicio').forEach(btn => {
    btn.addEventListener('click', volverAInicioDesdeDetalle);
});

// Deshabilitar la funcionalidad de 'Volver a Seleccionar' y redirigir al inicio
btnVolverSelector.addEventListener('click', volverAInicioDesdeDetalle);


// Inicializar: La primera vez que carga la página
cambiarPantalla('pantalla-inicio');