/**
 * variable student avec les parametre name et grade
 */
const student = { name: "Léo", grade: 14 };

/**
 * Elle met a jour le l'utidiant avec une nouveau grade 
 * @param student le student iniatial
 * @param newGrade nouveau grade
 * @returns le student avec la mise a jour du grade
 */
function updateGrade( student: { grade: number },newGrade: number ) {
    return { ...student, grade: newGrade };
  }

const newStudent = updateGrade(student, 6);

console.log("Elleve avec grade initiale : ", student); // grade = 14
console.log("Nouveau grade :", newStudent); // new grade qui sera 6 pour
