# Test-Tecnhique-TicTacTrip
Test Technique en Back-end pour justifier un texte pour l'entreprise TicTacTrip
# Projet de Justification de Texte

Ce projet est une solution de back-end pour justifier un texte en ajoutant des espaces supplémentaires entre les mots. Il a été réalisé dans le cadre du test technique pour l'entreprise TicTacTrip.

## Fonctionnalités

- Justification de texte : Le serveur reçoit une requête POST contenant un texte à justifier et renvoie le texte justifié avec des espaces supplémentaires insérés entre les mots.

## Technologies utilisées

- Node.js : Plateforme JavaScript utilisée pour exécuter le serveur back-end.
- Express.js : Framework web utilisé pour la création des routes et la gestion des requêtes HTTP.
- MongoDB : Base de données NoSQL utilisée pour stocker les utilisateurs et les statistiques de mots.
- Mongoose : Bibliothèque de modélisation d'objets MongoDB utilisée pour interagir avec la base de données.
- Jest : Framework de tests unitaires utilisé pour tester les différentes fonctionnalités du serveur.
- Rate Limiting : Middleware utilisé pour limiter le nombre de requêtes par utilisateur sur une certaine période.
- Dotenv : Bibliothèque utilisée pour charger les variables d'environnement à partir du fichier .env.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- Node.js : [Télécharger Node.js](https://nodejs.org)
- MongoDB : [Télécharger MongoDB](https://www.mongodb.com)

## Installation

1. Clonez ce dépôt : `git clone https://github.com/AichouneCyril/Test-Tecnhique-TicTacTrip.git`
2. Accédez au répertoire du projet : `cd Test-Tecnhique-TicTacTrip`
3. Installez les dépendances : `npm install`

## Configuration

1. Renommez le fichier `.env.example` en `.env`.
2. Ouvrez le fichier `.env` et configurez les variables d'environnement selon vos besoins.

## Démarrage du serveur

1. Exécutez la commande suivante pour démarrer le serveur : `npm run dev`
2. Le serveur sera accessible à l'adresse suivante : `http://localhost:3000`


## Tests

- Pour exécuter les tests unitaires, utilisez la commande suivante : `npm test`

N'hésitez pas à explorer le code source du projet pour plus de détails sur son fonctionnement et sa structure.

