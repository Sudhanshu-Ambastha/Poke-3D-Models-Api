# Changelog

## v0.1.0 (2025-02-09)

This is the initial release of the Pokemon 3D API!  This API allows users to fetch 3D GLB models of Pokemon, with support for various forms.

**Features:**

* **3D Model Retrieval:** The API allows users to fetch 3D GLB models of Pokemon.
* **Supported Forms:** The following Pokemon forms are currently supported:
    * Regular Forms: Generations 1-6 (inclusive)
    * Hisuian Forms: All available Hisuian forms
    * Primal Forms: All available Primal forms
    * Origin Forms: All available Origin forms
    * Mega Evolutions: All Mega Evolutions *except* Manectric
    * XY Forms: All XY forms
* **Search and Filtering:** Basic search and filtering functionality is implemented, as demonstrated in the included `example.html` file.
* **Up-to-date Dependencies:** All dependencies and libraries have been updated to their latest versions.
* **Documentation:** Basic documentation is available via Postman: [https://documenter.getpostman.com/view/29725199/2sAYX8KMU8](https://documenter.getpostman.com/view/29725199/2sAYX8KMU8)

**Known Issues/Limitations:**

* **Incomplete Form Support:**  Shiny forms, Gigantamax forms, and other special forms are currently under development and not yet available.
* **Animated Models:** While many models are animated, not all models have animations.  Game-ready models are prioritized.
* **Model Availability:**  Not all Pokemon forms have 3D models available at this time. We are working to expand the model library.

**Future Plans:**

* We plan to add support for all remaining Pokemon forms, including Shiny, Gigantamax, and others.
* We will continue to expand the library of 3D models and animations.
* Further improvements to search and filtering are planned.
* We will continue to update the API to ensure it remains up-to-date with the latest versions of all dependencies.