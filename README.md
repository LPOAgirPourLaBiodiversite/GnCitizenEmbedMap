# GnCitizenEmbedMap
Carte simple de restitution des données d'un programme.

[Démo ici](https://lpoagirpourlabiodiversite.github.io/GnCitizenEmbedMap/ "Démo")

Pour personnaliser la source des données, éditez le fichier `assets/custom.js`.

```js
    var CitizenUrl = 'https://cors.io/?http://v2252.phpnet.fr/gncitizen/api'; // GeoNature-citizen API url 
    var CitizenProgram = 2; // Program id
    var CitizenType = 'sites'; // Program type 'sites' or 'observations' 
    var tileLayer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'; // Map background source layer (OpenStreetMap)
    var tileLayerAttribution = '&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'; // Map background source layer citation (OpenStreetMap)
    var dataMarker = 'assets/images/pointer-green.png' // Map marker for datas
```

Le préfixe d'url https://cors.io est optionnel, utilisé en cas de problème de type `cross-origin`

TODO

* [ ] Personnaliser les `tooltips` des observations espèces
* [ ] Ajouter une photo de l'observation dans les `tooltips`

