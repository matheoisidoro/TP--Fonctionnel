//Question 5.4 

/**
 * Tableau avec utilisateur et hobies 
 */
const utilisateurHobie = [
    { nom: "Alice", hobies: ["climbing", "yoga"] },
    { nom: "Bob", hobies: ["gaming"] },
    { nom: "Charlie", hobies: ["reading", "hiking"] },
  ];
  
  /**
   *Recuperer les hobie 
   * @param listehobies liste hobies 
   * @returns tableau avec les hobies 
   */
  function recupererHobies(
    listehobies: {hobies: string[] }[]): string[] {
    return listehobies.flatMap(utilisateur => utilisateur.hobies);
  }
  

  const hobies = recupererHobies(utilisateurHobie);
  
  console.log("La liste de tous les hobie sont : ", hobies);
  