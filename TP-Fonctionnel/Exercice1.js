/**
 * Dans cette fonction pure, nous avons toujour le meme resultat parce que "add" depend uniquement de ses paramettre
 * @param a est le premier nombre
 * @param b est le deuxieme nombre
 * @returns il donne la somme de a + b
 */
function add(a, b) {
    return a + b;
}
console.log(add(7, 3));
console.log(add(7, 3));
/**
 * Dans cette focntion impure, le resultat depend de "counter". "increment" permet de modifier une vraiable globale qui est "counter"
 * counter est une vraibleglobal qy=ui es en dehors de la focntion
 */
var counter = 0;
/**
 *
 * @returns  la nouvelle valeur de la variable globale counter
 */
function increment() {
    counter++; // augmente la variable globale counter de 1
    return counter; //  retourner la valeur 
}
console.log(increment()); // il passe de 0 a 1
console.log(increment()); // il passe de 1 a 2
