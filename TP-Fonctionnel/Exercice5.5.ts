const utilisateurs = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 15 },
    { nom: "Charlie", age: 30 },
    { nom: "Diana", age: 17 },
  ];
  
  /**
   * Trouver les 2 utilsiatuer plus jeunes 
   * @param listeUtilisateurs lite des utilsiateur 
   * @returns les 2 utilsiateur plus jeune 
   */
  function plusJeunes(
    listeUtilisateurs: { nom: string; age: number }[]) {
    const copieUtilisateurs = [...listeUtilisateurs];
    copieUtilisateurs.sort((a, b) => a.age - b.age);
    return copieUtilisateurs.slice(0, 2);
  }
  
  const deuxplusJeunes = plusJeunes(utilisateurs);
  
  console.log("Les 2 plus jeune utilisateur sont :", deuxplusJeunes);