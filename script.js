const slides = [
    {img: "PIXEL.png", name: "ORIGINAL", sub: "PRIMER JUEGO DE WITCHOLET", url: "WitcholetOGDescarga.html"},
    { img: "Imagenes/CassandraSplashArt.jpeg", name: "Cassandra Quigley", sub: "La Bruja de las Arañas", url: "Personajes/CassandraQuigleyFicha.html"},
    { img: "Imagenes/AileenSplashArt.jpg", name: "Aileen Graham", sub: "La Reina de Assilim", url: "Personajes/AileenGrahamFicha.html" },
    { img: "Imagenes/IvettaSawyerSplashArt.jpg", name: "Ivetta Sawyer", sub: "La Que Posee Demonios", url: "Personajes/IvettaSawyerFicha.html" },
    { img: "Imagenes/NetrisNowakSplashArt.png", name: "Netris Nowak", sub: "La rata de burbuju", url: "Personajes/NetrisNowakFicha.html" },
    { img: "Imagenes/TitiriteraSplashart.jpg", name: "La titiritera", sub: "La mascara y la madre", url: "Personajes/TitiriteraFicha.html" },
    { img: "Imagenes/DracoEtaminSplashArt.jpeg", name: "Draco Etamin", sub: "El Hijo de la Orden", url: "Personajes/DracoEtaminFicha.html" },
    { img: "Imagenes/LaBestiaSplashArt.jpg", name: "La Bestia", sub: "La niña y su monstruo", url: "Personajes/LaBestiaFicha.html" },
    { img: "Imagenes/KristineSplashArt2.jpg", name: "Kristine Shipton", sub: "La Witcholet", url: "Personajes/KristineShiptonFicha.html" },
    { img: "Imagenes/LudisSplashArt.jpg", name: "Ludis Sola", sub: "El arquitecto del mañana", url: "Personajes/LudisSolaFicha.html" },
    { img: "Imagenes/ElizabethSplashArt.jpg", name: "Elizabeth ", sub: "La Brujita", url: "Personajes/ElizabethFicha.html" }
];

const slidesRecomended = [
    { img: "Imagenes/CassandraSplashArt.jpeg", name: "Cassandra Quigley", sub: "La Bruja de las Arañas", url: "Personajes/CassandraQuigleyFicha.html"},
    { img: "Imagenes/AileenSplashArt.jpg", name: "Aileen Graham", sub: "La Reina de Assilim", url: "Personajes/AileenGrahamFicha.htmL" },
    { img: "Imagenes/LaBestiaSplashArt.jpg", name: "La Bestia", sub: "La niña y su monstruo", url: "Personajes/LaBestiaFicha.html" },
    { img: "Imagenes/IvettaSawyerSplashArt.jpg", name: "Ivetta Sawyer", sub: "La Que Posee Demonios", url: "Personajes/IvettaSawyerFicha.html" },
    { img: "Imagenes/KristineSplashArt2.jpg", name: "Kristine Shipton", sub: "La Witcholet", url: "Personajes/KristineShiptonFicha.html" },
    { img: "Imagenes/LudisSplashArt.jpg", name: "Ludis Sola", sub: "El arquitecto del mañana", url: "Personajes/LudisSolaFicha.html" },
    { img: "Imagenes/NetrisNowakSplashArt.png", name: "Netris Nowak", sub: "La rata de burbuju", url: "Personajes/NetrisNowakFicha.html" },
    { img: "Imagenes/DracoEtaminSplashArt.jpeg", name: "Draco Etamin", sub: "El Hijo de la Orden", url: "Personajes/DracoEtaminFicha.html" },
    { img: "Imagenes/TitiriteraSplashart.jpg", name: "La titiritera", sub: "La mascara y la madre", url: "Personajes/TitiriteraFicha.html" },
    { img: "Imagenes/ElizabethSplashArt.jpg", name: "Elizabeth ", sub: "La Brujita", url: "Personajes/ElizabethFicha.html" }
];

let personajesOrdenados = [];
let currentIdx = 0;

function updateCarousel() {
    const mainImg = document.getElementById('main-img');
    if (!mainImg) return;

    const leftIdx = (currentIdx - 1 + slides.length) % slides.length;
    const rightIdx = (currentIdx + 1) % slides.length;

    const sideLImg = document.getElementById('side-l-img');
    const sideRImg = document.getElementById('side-r-img');
    const infoCard = document.querySelector('.info-card');

    const elements = [mainImg, sideLImg, sideRImg, infoCard].filter(Boolean);

    elements.forEach(el => { el.style.opacity = "0"; });

    setTimeout(() => {
        const currentSlide = slides[currentIdx];

        mainImg.src = currentSlide.img;
        const charName = document.getElementById('char-name');
        const charSub = document.getElementById('char-subtitle');
        if (charName) charName.innerText = currentSlide.name;
        if (charSub) charSub.innerText = currentSlide.sub;

        const charLink = document.getElementById('char-link');
        if (charLink) charLink.href = currentSlide.url;

        if (sideLImg) sideLImg.src = slides[leftIdx].img;
        const sideLText = document.getElementById('side-l-text');
        if (sideLText) sideLText.innerText = slides[leftIdx].name;

        if (sideRImg) sideRImg.src = slides[rightIdx].img;
        const sideRText = document.getElementById('side-r-text');
        if (sideRText) sideRText.innerText = slides[rightIdx].name;

        guardarEnHistorial(currentSlide);

        elements.forEach(el => { el.style.opacity = "1"; });
    }, 300);
}

function renderLatestArticles() {
    const grid = document.getElementById('latest-grid');
    if (!grid) return;

    const latestItems = slides.slice(0, 5);

    // Añadido loading="lazy" aquí también
    grid.innerHTML = latestItems.map(item => `
        <div class="latest-card" onclick="accederArticulo('${item.url}', '${item.name}')">
            <img src="${item.img}" alt="${item.name}" loading="lazy">
            <div class="card-info-bottom">               
                <span class="sub">${item.sub}</span>
                <span class="title">${item.name}</span>
            </div>
        </div>
    `).join('');
}

function renderRecomendedArticles() {
    const grid = document.getElementById('Recomended-grid');
    if (!grid) return;

    const RecomendedItems = slidesRecomended.slice(0, 5);

    // Añadido loading="lazy" aquí también
    grid.innerHTML = RecomendedItems.map(item => `
        <div class="Recomended-card" onclick="accederArticulo('${item.url}', '${item.name}')">
            <img src="${item.img}" alt="${item.name}" loading="lazy">
            <div class="card-info-bottom">               
                <span class="sub">${item.sub}</span>
                <span class="title">${item.name}</span>
            </div>
        </div>
    `).join('');
}

function accederArticulo(url, nombre) {
    guardarEnHistorial({ name: nombre, url: url });
    window.location.href = url;
}

function openFull(src) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top:0; left:0; width:100%; height:100%;
        background: rgba(0,0,0,0.9); z-index:1000;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer;
    `;
    modal.innerHTML = `<img src="${src}" style="max-width: 90%; max-height: 90%; border: 2px solid var(--gold);">`;
    modal.onclick = () => modal.remove();
    document.body.appendChild(modal);
}

function jumpToSlide(name) {
    const index = slides.findIndex(s => s.name === name);
    if (index !== -1) {
        currentIdx = index;
        updateCarousel();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function changeSlide(direction) {
    currentIdx = (currentIdx + direction + slides.length) % slides.length;
    updateCarousel();
}

function guardarEnHistorial(articulo) {
    let historial = JSON.parse(localStorage.getItem('witcholet_history')) || [];
    
    if (historial.length === 0 || historial[0].name !== articulo.name) {
        historial.unshift({
            name: articulo.name,
            url: articulo.url,
            fecha: new Date().toISOString()
        });
    }

    if (historial.length > 10) historial.pop();
    
    localStorage.setItem('witcholet_history', JSON.stringify(historial));
}

function renderAlphabeticalCharacters() {
    const grid = document.getElementById('all-characters-grid');
    if (!grid) return;

    const soloPersonajes = slides
        .filter(item => item.name && item.name.trim().toUpperCase() !== 'ORIGINAL')
        .map(item => ({
            ...item,
            name: item.name.trim()
        }));

    personajesOrdenados = soloPersonajes.sort((a, b) => 
        a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
    );

    mostrarTarjetas(personajesOrdenados);
}

function mostrarTarjetas(lista) {
    const grid = document.getElementById('all-characters-grid');
    if (!grid) return;

    if (lista.length === 0) {
        grid.innerHTML = `<p class="no-results">No se encontraron personajes coincidentes.</p>`;
        return;
    }

    grid.innerHTML = lista.map(item => `
        <article class="character-card" onclick="accederArticulo('${item.url}', '${item.name}')">
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

// Único window.onload limpio que ejecuta todo correctamente
window.onload = () => {
    updateCarousel();
    renderLatestArticles();
    renderRecomendedArticles();
    renderAlphabeticalCharacters();
};