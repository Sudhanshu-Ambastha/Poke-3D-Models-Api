let allPokemon = [];

const generationRanges = {
    1: [1, 151],
    2: [152, 251],
    3: [252, 386],
    4: [387, 493],
    5: [494, 649],
    6: [650, 721],
    7: [722, 809],
    8: [810, 905],
    9: [906, 1025]
};

function fetchPokemonData() {
    const formFilter = document.getElementById('formFilter').value;

    const filePaths = {
        regular: './models/json/Regular.json',
        alolan: './models/json/alolan.json',
        galarian: './models/json/galar.json',
        huisian: './models/json/hisuian.json',
        mega: './models/json/mega.json',
        gmax: './models/json/Gmax.json',
        megaxy: './models/json/xy.json',
        unique: './models/json/unique.json',
        shiny: './models/json/Shiny.json',
        primal:'./models/json/primal.json',
        origin:'./models/json/origin.json',  
        multi:'./models/json/MultiForm.json',  
    };

    const selectedPaths = formFilter === 'all'
        ? Object.values(filePaths)
        : [filePaths[formFilter]];

    Promise.all(selectedPaths.map(path => fetch(path).then(res => res.json())))
        .then(data => {
            allPokemon = data.flatMap(dataset => dataset.pokemon || dataset); 
            filterAndRenderPokemon();
        })
        .catch(error => console.error('Error loading data:', error));
}

function filterAndRenderPokemon() {
    const genFilter = document.getElementById('generationFilter').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const formFilter = document.getElementById('formFilter').value;

    let filteredPokemon = allPokemon;

    if (genFilter !== 'all') {
        const [start, end] = generationRanges[genFilter];
        filteredPokemon = filteredPokemon.filter(pokemon => pokemon.id >= start && pokemon.id <= end);
    }

    if (searchInput) {
        filteredPokemon = filteredPokemon.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchInput) || pokemon.id.toString().includes(searchInput)
        );
    }

    renderPokedex(filteredPokemon);
}

function renderPokedex(pokemonList) {
    const pokedex = document.getElementById('pokedex');
    pokedex.innerHTML = ''; 

    pokemonList.forEach(pokemon => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');

        const modelViewer = document.createElement('model-viewer');
        modelViewer.setAttribute('camera-controls', '');
        modelViewer.setAttribute('auto-rotate', '');
        modelViewer.setAttribute('autoplay', '');
        modelViewer.setAttribute('environment-image', 'neutral');
        modelViewer.setAttribute('alt', `Model of ${pokemon.name}`);
        modelViewer.setAttribute('src', pokemon.model);
        card.appendChild(modelViewer);

        const id = document.createElement('div');
        id.classList.add('pokemon-id');
        id.textContent = `ID: ${pokemon.id}`;
        card.appendChild(id);

        const name = document.createElement('h2');
        name.textContent = pokemon.name;
        card.appendChild(name);

        card.addEventListener('click', () => openModal(pokemon.model));
        pokedex.appendChild(card);
    });
}

document.getElementById('formFilter').addEventListener('change', fetchPokemonData);
document.getElementById('generationFilter').addEventListener('change', filterAndRenderPokemon);
document.getElementById('searchInput').addEventListener('input', filterAndRenderPokemon);
document.getElementById('searchButton').addEventListener('click', filterAndRenderPokemon);

fetchPokemonData();
