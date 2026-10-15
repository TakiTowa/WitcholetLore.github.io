// Diccionario de personajes para la lista
const listaPersonajes = [
    { img: "Imagenes/CassandraSplashArt.jpeg", name: "Ciudad Palacio", sub: "La ciudad de los humanos", url: "Personajes/CassandraQuigleyFicha.html" },
    { img: "Imagenes/AileenSplashArt.jpg", name: "Aquelarre", sub: "La capital de las brujas", url: "Personajes/AileenGrahamFicha.html" },
    { img: "Imagenes/IvettaSplashArt.jpeg", name: "Bosque de los duendes", sub: "Siempre parte del bosque", url: "Personajes/IvettaSawyerFicha.html" },
    { img: "Imagenes/KristineSplashArt2.jpg", name: "Burbuju", sub: "El refugio de las brujas", url: "Personajes/KristineShiptonFicha.html" },
    { img: "Imagenes/TitiriteraSplashart.jpg", name: "Teatro de Hecate", sub: "El arquitecto del mañana", url: "Personajes/TitiriteraFicha.html" },
    { img: "Imagenes/ElizabethSplashArt.jpg", name: "Calabozo de Assilim", sub: "Por la seguridad de Assilim", url: "Personajes/ElizabethFicha.html" }
];

let personajesOrdenados = [];

function renderAlphabeticalCharacters() {
    const grid = document.getElementById('all-characters-grid');
    if (!grid) return;

    // Ordenar de la A a la Z
    personajesOrdenados = [...listaPersonajes].sort((a, b) => 
        a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
    );

    mostrarTarjetas(personajesOrdenados);
}

function mostrarTarjetas(lista) {
    const grid = document.getElementById('all-characters-grid');
    if (!grid) return;

    if (lista.length === 0) {
        grid.innerHTML = `<p class="no-results" style="grid-column: 1/-1; text-align: center; color: #8c8273; padding: 40px 0;">No se encontraron personajes coincidentes.</p>`;
        return;
    }

    grid.innerHTML = lista.map(item => `
        <article class="character-card" onclick="window.location.href='${item.url}'">
            <div class="card-img-wrap">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
            </div>
            <div class="card-info-bottom">
                <span class="sub">${item.sub}</span>
                <span class="title">${item.name}</span>
            </div>
        </article>
    `).join('');
}

function filtrarPersonajes(busqueda) {
    const query = busqueda.toLowerCase().trim();
    const filtrados = personajesOrdenados.filter(char => 
        char.name.toLowerCase().includes(query) || 
        char.sub.toLowerCase().includes(query)
    );
    mostrarTarjetas(filtrados);
}

// Se ejecuta al cargar únicamente la página de personajes
window.onload = () => {
    renderAlphabeticalCharacters();
};