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

fetch('./PokeData.json')
    .then(response => response.json())
    .then(data => {
        allPokemon = data.pokemon;
        renderPokedex(allPokemon);
    })
    .catch(error => console.error('Error loading data:', error));

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

function filterByGen() {
    const genFilter = document.getElementById('generationFilter').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    let filteredPokemon = allPokemon;

    if (genFilter && genFilter !== 'all') {
        const [start, end] = generationRanges[genFilter];
        filteredPokemon = filteredPokemon.filter(pokemon => pokemon.id >= start && pokemon.id <= end);
    }

    if (searchInput) {
        filteredPokemon = filteredPokemon.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchInput) || 
            pokemon.id.toString().includes(searchInput)
        );
    }

    renderPokedex(filteredPokemon);
}

function openModal(modelSrc) {
    const modal = document.getElementById('modelModal');
    const modelViewerModal = document.getElementById('modelViewerModal');
    
    modelViewerModal.setAttribute('camera-controls', '');
    modelViewerModal.setAttribute('auto-rotate', '');
    modelViewer.setAttribute('autoplay', ''); 
    modelViewerModal.setAttribute('environment-image', 'neutral');
    modelViewerModal.setAttribute('src', modelSrc);

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modelModal');
    const modelViewerModal = document.getElementById('modelViewerModal');
    
    modelViewerModal.setAttribute('src', '');

    modal.style.display = 'none';
}

document.getElementById('generationFilter').addEventListener('change', filterByGen);
document.getElementById('searchInput').addEventListener('input', filterByGen);
document.getElementById('searchButton').addEventListener('click', filterByGen);
document.getElementById('modelModal').addEventListener('click', closeModal);
document.getElementById('modalContent').addEventListener('click', event => event.stopPropagation());