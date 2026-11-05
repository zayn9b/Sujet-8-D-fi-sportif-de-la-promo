Projet AAW – Sujet 8 : Défi sportif de la promo
Groupe : ________ · Trigramme : ___ (préfixe de toutes vos commandes) · Pile : NodeJS + React · Données : un spreadsheet propre au groupe

1. Contexte
La promo lance un défi sportif sur le mois. Chacun déclare ses activités et gagne des points. Votre application suit les activités et tient le classement. Elle a deux points d'entrée : le site web et un bot Discord.

2. Ressource gérée
Chaque utilisateur gère ses activités : type de sport, durée, jour et points gagnés.

3. Exigences

3.1 Site non connecté
Page d'accueil avec menu et présentation du défi.
Lien de connexion et lien vers le classement dans le menu.
Classement des participants, filtrable par type de sport.
Fiche d'un participant : ses activités, son total et la date de dernière mise à jour.

3.2 Connexion
Authentification via l'API Discord (OAuth2). Aucun mot de passe local.

3.3 Site connecté
Un lien « Modifier » apparaît dans le menu.
L'utilisateur déclare et corrige uniquement ses propres activités.

3.4 Bot Discord
Commande de consultation : les points d'un participant et le classement.
Commande de mise à jour : déclarer une activité.
Toutes les commandes sont préfixées par votre trigramme (exemple : /abc-points).
Le bot est ajouté au serveur Discord de test du module.
Le README liste toutes les commandes avec leurs paramètres.

3.5 Sécurité
Un token de session stocké en base de données, avec une date d'expiration.
Un token expiré est refusé par le site comme par le bot.

3.6 Administration
Un rôle administrateur, géré dans vos données.
L'administrateur modifie les activités de n'importe quel participant.
L'administrateur déconnecte un utilisateur (invalidation de son token).
Action propre au sujet : définir le barème de points par sport et remettre à zéro le classement du mois.

4. Éléments remis en cours
Le projet ne peut être ni démarré ni validé sans les éléments ci-dessous. Ils ne sont pas diffusés par écrit : venez les chercher en séance.

Élément                                                              	Remis le
Spreadsheet de départ : structure des colonnes et activités d'exemple	________
Identifiants du serveur Discord de test et de l'application bot	________
Règle métier du sujet : barème de points et plafond quotidien	________
Scénarios de démonstration à jouer lors de la soutenance	________

5. Jalons
Jalon	Contenu attendu	Date
J1	Schéma de données et maquettes du site	________
J2	Connexion Discord et classement	________
J3	Bot Discord fonctionnel	________
J4	Backoffice administrateur	________
Soutenance	Démonstration et questions individuelles	________

6. Livrables et évaluation
Dépôt Git avec un historique de commits régulier et lisible, auquel chaque membre contribue.

README : installation, configuration, liste des commandes du bot.
Soutenance individuelle : démonstration en direct, puis modification de code demandée en séance sur votre propre projet.
