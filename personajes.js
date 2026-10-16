// Diccionario de personajes para la lista
const listaPersonajes = [
    { img: "Imagenes/CassandraSplashArt.jpeg", name: "Cassandra Quigley", sub: "La Bruja de las Arañas", url: "Personajes/CassandraQuigleyFicha.html" },
    { img: "Imagenes/AileenSplashArt.jpg", name: "Aileen Graham", sub: "La Reina de Assilim", url: "Personajes/AileenGrahamFicha.html" },
    { img: "Imagenes/IvettaSawyerSplashArt.jpg", name: "Ivetta Sawyer", sub: "La Que Posee Demonios", url: "Personajes/IvettaSawyerFicha.html" },
    { img: "Imagenes/KristineSplashArt2.jpg", name: "Kristine Shipton", sub: "La Witcholet", url: "Personajes/KristineShiptonFicha.html" },
     { img: "Imagenes/TitiriteraSplashart.jpg", name: "La titiritera", sub: "La mascara y la madre", url: "Personajes/TitiriteraFicha.html" },
    { img: "Imagenes/LudisSplashArt.jpg", name: "Ludis Sola", sub: "El arquitecto del mañana", url: "Personajes/LudisSolaFicha.html" },
    { img: "Imagenes/DracoEtaminSplashArt.jpeg", name: "Draco Etamin", sub: "El Hijo de la Orden", url: "Personajes/DracoEtaminFicha.html" },
    { img: "Imagenes/LaBestiaSplashArt.jpg", name: "La Bestia", sub: "La niña y su monstruo", url: "Personajes/LaBestiaFicha.html" },
        { img: "Imagenes/CirseEnebroSplashArt.jpg", name: "Cirse Enebro", sub: "La Hija de Helios", url: "Personajes/CirseEnebroFicha.html" },
    { img: "Imagenes/DagnijaClutterbuckSplashArt.jpg", name: "Dagnija Clutterbuck", sub: "La Promesa Literata", url: "Personajes/DagnijaClutterbuckFicha.html" },
    { img: "Imagenes/NetrisNowakSplashArt.png", name: "Netris Nowak", sub: "La rata de burbuju", url: "Personajes/NetrisNowakFicha.html" },
    { img: "Imagenes/ElizabethSplashArt.jpg", name: "Elizabeth", sub: "La Brujita", url: "Personajes/ElizabethFicha.html" }
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