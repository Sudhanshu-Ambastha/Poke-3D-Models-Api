let allPokemon = [];

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
        modelViewer.setAttribute('animation-name', 'Idle');
        modelViewer.setAttribute('environment-image', 'neutral');
        modelViewer.setAttribute('alt', `Model of ${pokemon.name}`);
        modelViewer.setAttribute('src', pokemon.model);
        card.appendChild(modelViewer);

        const name = document.createElement('h2');
        name.textContent = pokemon.name;
        card.appendChild(name);

        card.addEventListener('click', () => openModal(pokemon.model));

        pokedex.appendChild(card);
    });
}

function openModal(modelSrc) {
    const modal = document.getElementById('modelModal');
    const modelViewerModal = document.getElementById('modelViewerModal');
    
    modelViewerModal.setAttribute('camera-controls', '');
    modelViewerModal.setAttribute('auto-rotate', '');
    modelViewerModal.setAttribute('animation-name', 'Idle');
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

function filterPokemon() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredPokemon = allPokemon.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchInput) || 
        pokemon.id.toString().includes(searchInput)
    );
    renderPokedex(filteredPokemon);
}

document.getElementById('searchInput').addEventListener('input', filterPokemon);
document.getElementById('searchButton').addEventListener('click', filterPokemon);