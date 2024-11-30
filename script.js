// Fetch Pokémon data from a JSON file
fetch('./PokeData.json')
    .then(response => response.json())
    .then(data => renderPokedex(data.pokemon))
    .catch(error => console.error('Error loading data:', error));

/**
 * Render the Pokedex grid
 * @param {Array} pokemonList - List of Pokémon from the JSON file
 */
function renderPokedex(pokemonList) {
    const pokedex = document.getElementById('pokedex');

    pokemonList.forEach(pokemon => {
        // Create card container
        const card = document.createElement('div');
        card.classList.add('pokemon-card');
        
        // Add 3D model viewer to the card
        const modelViewer = document.createElement('model-viewer');
        modelViewer.setAttribute('camera-controls', '');
        modelViewer.setAttribute('auto-rotate', '');
        modelViewer.setAttribute('animation-name', 'Idle'); // Ensure the model has an "Idle" animation
        modelViewer.setAttribute('environment-image', 'neutral');
        modelViewer.setAttribute('alt', `Model of ${pokemon.name}`);
        modelViewer.setAttribute('src', pokemon.model);
        card.appendChild(modelViewer);

        // Add Pokémon name
        const name = document.createElement('h2');
        name.textContent = pokemon.name;
        card.appendChild(name);

        // Add click event to open the modal and preview model
        card.addEventListener('click', () => openModal(pokemon.model));

        // Append card to Pokedex
        pokedex.appendChild(card);
    });
}

function openModal(modelSrc) {
    const modal = document.getElementById('modelModal');
    const modelViewerModal = document.getElementById('modelViewerModal');
    
    // Set attributes for dynamic animations and environment
    modelViewerModal.setAttribute('camera-controls', '');
    modelViewerModal.setAttribute('auto-rotate', '');
    modelViewerModal.setAttribute('animation-name', 'Idle'); // Ensure the model has an "Idle" animation
    modelViewerModal.setAttribute('environment-image', 'neutral');
    modelViewerModal.setAttribute('src', modelSrc);

    // Display the modal
    modal.style.display = 'block';
}

/**
 * Close the modal
 */
function closeModal() {
    const modal = document.getElementById('modelModal');
    const modelViewerModal = document.getElementById('modelViewerModal');
    
    // Clear the model source when closing the modal
    modelViewerModal.setAttribute('src', '');

    // Hide the modal
    modal.style.display = 'none';
}
