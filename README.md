# README
Pour réaliser mon application j'ai choisi de partir sur le framework Ruby On Rails et la bibliothèque React. Je l'ai ensuite publié sur la plateforme de déploiement Heroku, elle est disponible [ici](https://ecommerce-dashboard-kotcherga.herokuapp.com/).

## Mise en place

1- Pour démarrer le projet j'ai commencé avec un [template](https://github.com/kevinkotcherga/template_react_redux_rails7_for_heroku) que j'ai créé il y a quelque temps, il permet de déployer une application Ruby On Rails / React sur Heroku.

2- La première problématique à laquel j'ai été confronté était la taille du fichier csv. L'importation ou la lecture de celui-ci me prenait trop de temps. J'ai donc utilisé redis et sidekiq pour faire le travail en arrière plan.

3- Le tableau de bord devant être filtré par pays, il me fallait trouver une solution pour chercher dans la db depuis React. J'ai donc utilisé la gem 'ransack'.

4- J'ai créé mon front React avec npx create-react-app.

5- J'ai utilisé axios pour pouvoir accéder à mon API de recherche.

6- J'ai mis en place les fonctions pour trouver le total des revenus, le nombre de clients, les revenus moyen par commandes et les revenues par mois.

7- J'ai mis en place redis et sidekiq pour une importation sur heroku.

## Utilisation 

```
bundle i
rails db:create
rails db:migrate
bundle exec sidekiq
rails s

optionel pour react, le prebuild charge la page front en même temps que rails s
cd client
npm i
npm start
```

## Amélioration
