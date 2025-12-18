const nombres: number[] = [1, 2, 3, 4, 5, 6];

/**
 * On prend le tableau "nombres" et on applique plusieur calcule
 */
const resultat = nombres
  .filter(nombre => nombre % 2 === 0)  
  .map(nombre => nombre * 2)          
  .reduce((somme, nombre) => somme + nombre, 0); 

console.log("Résultat exo 4.1 :", resultat); 

/**
 * Calcule la somme des valeur d'un tableau 
 * @param tableau de nombre
 * @returns somme total des nombres
 */
function calculerSomme(tableau: number[]): number {
  return tableau.reduce((somme, nombre) => somme + nombre, 0);
}
/**
 * Calcule la moyenne des valeur d'un tableau 
 * @param tableau de nombre
 * @returns la moyenne des valeurs 
 */
function calculerMoyenne(tableau: number[]): number {
  return calculerSomme(tableau) / tableau.length;
}

/**
 * Calcule le produit des valeur d'un tableau 
 * @param tableau de nombre
 * @returns le produit de tout les nombre 
 */
function calculerProduit(tableau: number[]): number {
  return tableau.reduce((produit, nombre) => produit * nombre, 1);
}


console.log("La somme est : ", calculerSomme(nombres));     
console.log("La moyenne est : ", calculerMoyenne(nombres));    
console.log("Le produit est :", calculerProduit(nombres));    