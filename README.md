# Pokémon 3D Models
Welcome to the **Pokémon 3D Model Viewer**! This project allows users to view Pokémon in 3D using the `<model-viewer>` component. The app fetches data about Pokémon, displays their names, and lets users preview 3D models of various Pokémon.

---

## Table of Contents
- [Pokémon 3D Models](#pokémon-3d-models)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Using the API](#using-the-api)
    - [API Endpoint](#api-endpoint)
  - [Contributing](#contributing)
    - [Steps to Contribute:](#steps-to-contribute)
  - [How to Add More Models](#how-to-add-more-models)
  - [Note About APIs](#note-about-apis)
  - [License](#license)

---

## Features
- View Pokémon in 3D directly in the browser.
- Click on a Pokémon to preview its 3D model in a modal view.
- The app fetches Pokémon data dynamically from a JSON file, displaying it in a grid layout.
- Easy to extend by adding new Pokémon 3D models.

---

## Using the API

If you want to fetch Pokémon data from this project to use in your own applications, follow these steps:

### API Endpoint
The Pokémon data is exposed as a JSON API. You can access it using the following URL:
```
https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-Models/main/PokeData.json
```

## Contributing

We welcome contributions from the community! You can help by:

1. **Adding new 3D models** of Pokémon.
2. **Improving the user interface** and styling.
3. **Fixing bugs** and optimizing the app for better performance.
4. **Enhancing the code** with new features (like sorting Pokémon, filtering by type, etc.).
5. **Improving the documentation** for easier understanding and navigation.

### Steps to Contribute:
1. **Fork the Repository**: Fork the repo to your GitHub account.
2. **Clone your Fork**: Clone your fork to your local machine.
    ```bash
    git clone https://github.com/Sudhanshu-Ambastha/Pokemon-3D-Models.git
    ```
3. **Create a Branch**: Create a new branch for your feature or bug fix.
    ```bash
    git checkout -b add-new-pokemon-model
    ```
4. **Make Your Changes**: Add new Pokémon models to the `PokeData.json` file and implement any necessary changes.
5. **Commit Your Changes**: Commit your changes with a meaningful message.
    ```bash
    git commit -m "Added new Pokémon model named 'Pikachu'"
    ```
6. **Push to Your Fork**: Push your changes to your fork on GitHub.
    ```bash
    git push origin add-new-pokemon-model
    ```
7. **Create a Pull Request**: Create a pull request to the main repository, describing your changes.

## How to Add More Models

To add new Pokémon models to the app, follow these steps:

1. **Find or Create a 3D Model**: Search for Pokémon 3D models that are in `.glb` or `.gltf` formats. You can find models on various 3D model websites or create your own.
2. **Update the `PokeData.json`**: 
    - Add an entry for the new Pokémon.
    - Set the `model` property to the path of the 3D model.
    Example:
    ```json
   {
      "id": 25,
      "name": "Pikachu",
      "model": "./models/25.glb"
    },
    ```
3. **Ensure the Model is Hosted**: You can either host the model yourself or use an external link to the model file. Ensure the model is accessible from the project.

## Note About APIs

While there are many **Pokémon APIs** available that provide Pokémon data (e.g., stats, types, moves, etc.), **most of these APIs do not offer 3D models** of Pokémon. 

- **Why don't these APIs provide 3D models?**: Providing 3D models requires significant storage and bandwidth. Models are often large in size (several MBs), and hosting them for free or for public use can be difficult due to storage and bandwidth limitations.
- **Why don't we use other APIs?**: While you can retrieve detailed Pokémon information (like types, stats, and abilities) from APIs like [Pokémon API](https://pokeapi.co/), these services typically do not provide 3D models. As a result, it would be challenging to include those models in this app without substantial storage for model files.

## License

This project is open source and available under the [MIT License](./LICENSE).
