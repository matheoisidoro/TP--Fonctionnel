var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * variable student avec les parametre name et grade
 */
var student = { name: "Léo", grade: 14 };
/**
 * Elle met a jour le l'utidiant avec une nouveau grade
 * @param student le student iniatial
 * @param newGrade nouveau grade
 * @returns le student avec la mise a jour du grade
 */
function updateGrade(student, newGrade) {
    return __assign(__assign({}, student), { grade: newGrade });
}
var newStudent = updateGrade(student, 6);
console.log("Elleve avec grade initiale : ", student); // grade = 14
console.log("Nouveau grade :", newStudent); // new grade qui sera 6 pour
