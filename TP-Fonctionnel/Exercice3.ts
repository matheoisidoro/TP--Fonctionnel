/**
 * Cette fonction applique une fonction plusieurs fois sur une valeur
 * @param f Fonction à appliquer
 * @param n Nombre de fois que la fonction est appliquer
 * @param x Valeur de depart
 * @returns Le résultat final après n applications de la fonction
 */
function applyNTimes( f: (x: number) => number, n: number, x: number ): number {
    let resultat = x;
  
    for (let i = 0; i < n; i++) { // // Boucle qui applique la fonction f n fois
        resultat = f(resultat);
    }
    return resultat;
  }
/**
 * 
 * @param x Nombre à doubler
 * @returns Le nombre multiplie par 2
 */
const double = (x: number) => x * 2;
console.log(applyNTimes(double, 3, 1)); // 8

