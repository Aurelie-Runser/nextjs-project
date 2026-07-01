# Procédé de ce projet

J'ai utilisé ce projet pour apprendre les bases de next.js, comprendre comment le framework fonctionne. N'ayant presque pas d'expérience avec react, je devais commencer pas les bases.

Le projet n'est donc pas très élaboré, il n'y a pas vraiment de plus-value par rapport à ce qu'une simple aurait fait, comme la majorité du code a été écrite à partir de la documentation de next.js.

Le seule élément écrit entièrement à l'ia sont les fonctions CRUD de l'api. Je n'ai pas jugé pertinent dans l'imédiat d'apprendre à faire une api en next.js qui modifie un fichier json, étant un cas de figure que je ne rencontrerais pas sur de vrai projet.

Les étapes que j'ai suivis pour réaliser ce projet sont les suivantes : 

- j'ai cherché comment créer des pages et composants et surtout comment utiliser les layouts entre les différentes pages. J'ai jugé pertinent de comprendre comment faire une "1ere brique" correctement, afin de bien organiser mes éléments dès le début.
- dans cette même logique, j'ai défini les models des entités que je vais manipulé et les différents appel API pour accéder aux données. Les écrires pas à pas m'as permis de comprendre comment afficher ces données, d'habord dans des composants, puis sur des pages entières.
- c'est à ce moment que je me suis demander, pour des quetsions d'optimisations, quand et comment faire du rendu côté serveur et client. Après quelques manipulations, j'ai compris dans quel contexte utiliser l'un ou l'autre pour en arriver à cette conclusion :
    - si "rien" ne bouge dans la page, il faut la rendre côté serveur
    - s'il y a des intéractions, des éléments qui apparraisent au cliques alors il faire un rendu côté client pour profiter des fonctionnalités du navigateur
    - lorsque la majorité du comptenu de la page/component dépend de données chargées qui peuvent mettre du temps, le rendu côté client est à privilégié pour afficher un loader/squelette le temps du chargement et non juste une page blanche en attendant le rendu
- une fois que toutes mes pages ont été initialisés avec leurs contenus, j'ai cherché un moyen de protéger les pages "administrateur", d'où l'implémentation d'un système de connexion. Il est plus facile de mettre en place de la sécurité au début lorsqu'il y a peut d'élément et pour adapté le code plus facilement si j'utilisais des mauvaises pratiques
- l'étape suivante a été de mettre en place la création/suppression/modification des données, me permettant de comprendre comment gérer le cycle de vie de l'élément et le mettre à jour, comment utiliser des props et des event handler.

