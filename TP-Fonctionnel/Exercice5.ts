/**
 * Liste des utilisateurs 
 */
const utilisateurs = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 15 },
  { nom: "Charlie", age: 30 },
  { nom: "Diana", age: 17 },
];

//Question 5.1 :

/**
 * Recherche du premir utilisateur Majeur 
 * @param listeUtilisateurs la liste des utilisateurs 
 * @returns le premier utilisateur qui a 18 ans ou +
 */
function trouverUtilisateurMajeur( listeUtilisateurs: {age: number }[] ) {
  return listeUtilisateurs.find(utilisateur => utilisateur.age >= 18);
}
/**
 * recupere l'utilisateur majeur 
 */
const utilisateurMajeur = trouverUtilisateurMajeur(utilisateurs);

console.log("Le premier utilisateur majeur est ", utilisateurMajeur);


// Question 5.2 

/**
 * Voir s'il y a un utilsiateur mineur 
 * @param listeUtilisateurs la liste des utilisateur 
 * @returns renvoi true si utilisateur mineur, fals si c'est pas le cas 
 */
function existeUtilisateurMineur(listeUtilisateurs: { age: number }[] ): boolean {
  return listeUtilisateurs.some(utilisateur => utilisateur.age < 18);
}

/**
 * Voir s'il y a un utilisateur plus de 10 ans 
 * @param listeUtilisateurs la liste utilisateur 
 * @returns true s'il y en a 
 */
function UtilisateursPlusDixAns( listeUtilisateurs: {age: number }[] ): boolean {
  return listeUtilisateurs.every(utilisateur => utilisateur.age > 10);
}

const Mineur = existeUtilisateurMineur(utilisateurs);
const PlusDix = UtilisateursPlusDixAns(utilisateurs);


console.log("Il y a des utilisateur mineur : ", Mineur);
console.log("Il y a des utilisateur de plsu de 10 ans : ", PlusDix);

//Question 5.3

/**
 * Cette fonction recupere les nom 
 * @param listeUtilisateurs la liste de utilisateur 
 * @returns  tableau avec les nom des utilisateur 
 */
function recupererNom(
  listeUtilisateurs: { nom: string }[] ): string[] {
  return listeUtilisateurs.map(utilisateur => utilisateur.nom);
}

/**
 * Verfier si le nom est dans la liste 
 * @param listeNoms liste  des noms 
 * @param nomRecherche nom qui est rechecrher 
 * @returns True si le nom est la 
 */
function PresenceNom(listeNoms: string[],nomRecherche: string): boolean {
  return listeNoms.includes(nomRecherche);
}


const nomsUtilisateur = recupererNom(utilisateurs);
const alicepresent = PresenceNom(nomsUtilisateur, "Alice");
const evepresent = PresenceNom(nomsUtilisateur, "Eve");


console.log("Alice est present : ", alicepresent);
console.log("Eve est present:", evepresent);


