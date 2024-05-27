let students = [];
let numberOfStudents = prompt("Quantos alunos você deseja registrar?");
numberOfStudents = Number(numberOfStudents);

for (let i = 0; i < numberOfStudents; i++) {
    let studentName = prompt(`Aluno ${i + 1}: Qual é o seu nome?`);
    let testGradeOne = prompt(`${studentName}, digite a nota de sua primeira prova`);
    let testGradeTwo = prompt(`${studentName}, digite a nota de sua segunda prova`);

    testGradeOne = Number(testGradeOne);
    testGradeTwo = Number(testGradeTwo);

    let average = (testGradeOne + testGradeTwo) / 2;
    let success;

    if (average >= 7) {
        success = "Parabéns, você foi aprovado no concurso!";
    } else {
        success = "Infelizmente, você não foi aprovado.";
    }

    let student = {
        name: studentName,
        average: average.toFixed(2),
        success: success
    };

    students.push(student);
}

for (let student of students) {
    alert(`${student.name}, sua média foi: ${student.average}\n${student.success}`);
}

console.log(students);
