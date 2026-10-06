const readline = require("readline");

// Create user input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}

let students = [];

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    let numberOfStudents = Number(
        await askQuestion("How many students do you want to enter? ")
    );

    for (let i = 0; i < numberOfStudents; i++) {
        console.log(`\nStudent ${i + 1}`);

        let name = await askQuestion("Enter student name: ");
        let age = Number(await askQuestion("Enter student age: "));
        let grade = Number(await askQuestion("Enter student grade: "));

        let student = new Student(name, age, grade);

        students.push(student);
    }

    console.log("\n===== STUDENT LIST =====");

    for (let i = 0; i < students.length; i++) {
        console.log(
            `Name: ${students[i].name}, ` +
            `Age: ${students[i].age}, ` +
            `Grade: ${students[i].grade}`
        );
    }

    rl.close();
}

main();
