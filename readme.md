Projet 06 du cursus Python d'OpenClassrooms, 2022.
Ce script à été fait sur mac os, et testé sur windows et mac os.

## Installation de l'API
Ce script utilise une API, celle d'openclassrooom, pour cela il vous faut l'installer.

### Installation et exécution de l'application avec pipenv

1. Cloner ce dépôt de code à l'aide de la commande `$ git clone clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git` (vous pouvez également télécharger le code [en temps qu'archive zip](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR/archive/refs/heads/master.zip))
2. Rendez-vous depuis un terminal à la racine du répertoire ocmovies-api-fr avec la commande `$ cd ocmovies-api-fr`
3. Installez les dépendances du projet à l'aide de la commande `pipenv install` 
4. Créer et alimenter la base de données à l'aide de la commande `pipenv run python manage.py create_db`
5. Démarrer le serveur avec `pipenv run python manage.py runserver`

Lorsque le serveur fonctionne, après l'étape 5 de la procédure, l'API OCMovies peut être interrogée à partir des points d'entrée commençant par l'url de base [http://localhost:8000/api/v1/](http://localhost:8000/api/v1/). Le point d'entrée principal permettant de consulter les films est [http://localhost:8000/api/v1/titles](http://localhost:8000/api/v1/titles/). Si vous accédez à cette url depuis un navigateur,ce dernier vous présentera une interface naviguable servant de documentation et de laboratoire d'expériementation. Vous trouvez également une documentation plus formelle en bas de ce README.

Les étapes 1 à 4 ne sont requises que pout l'installation initiale. Pour les lancements ultérieurs du serveur de l'API, il suffit d'exécuter l'étape 5 à partir du répertoire racine du projet.

### Installation et exécution de l'application sans pipenv (avec venv et pip)

1. Cloner ce dépôt de code à l'aide de la commande `$ git clone clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git` (vous pouvez également télécharger le code [en temps qu'archive zip](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR/archive/refs/heads/master.zip))
2. Rendez-vous depuis un terminal à la racine du répertoire ocmovies-api-fr avec la commande `$ cd ocmovies-api-fr`
3. Créer un environnement virtuel pour le projet avec `$ python -m venv env` sous windows ou `$ python3 -m venv env` sous macos ou linux.
4. Activez l'environnement virtuel avec `$ env\Scripts\activate` sous windows ou `$ source env/bin/activate` sous macos ou linux.
5. Installez les dépendances du projet avec la commande `$ pip install -r requirements.txt`
6. Créer et alimenter la base de données avec la commande `$ python manage.py create_db`
7. Démarrer le serveur avec `$ python manage.py runserver`

Lorsque le serveur fonctionne, après l'étape 7 de la procédure, l'API OCMovies peut être interrogée à partir des points d'entrée commençant par l'url de base [http://localhost:8000/api/v1/](http://localhost:8000/api/v1/). Le point d'entrée principal permettant de consulter les films est [http://localhost:8000/api/v1/titles](http://localhost:8000/api/v1/titles/). Si vous accédez à cette url depuis un navigateur,ce dernier vous présentera une interface naviguable servant de documentation et de laboratoire d'expériementation. Vous trouvez également une documentation plus formelle en bas de ce README.

Les étapes 1 à 6 ne sont requises que pout l'installation initiale. Pour les lancements ultérieurs du serveur de l'API, il suffit d'exécuter les étapes 4 et 7 à partir du répertoire racine du projet.

## Ouverture du site:
Python 3 doit etre installé.

Pour ouvrir le site, il faut entrer dans un terminal depuis la racine du projet :
```
Python3 -m http.server 8001
```

puis dans un navigateur http://localhost:8001/main.html.