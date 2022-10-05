

const students = require ("./students.json") [

    {
        firstName: "bobby",
        grade: 80,
        address: "1 Apple Way"
    },
    {
        firstName: "jenny",
        grade: 90,
        address: "1 Apple Way"
    },
    {
        firstName: "tara",
        grade: 100,
        address: "1 Apple Way"
    },

]
//Display all the student's first name one at a time, one per line. 
//ex.
//bobby
//jenny
//tara
//studentList is what we get from the function
function showStudents(studentList) {
    for (let i = 0; i < studentList.length; i++) {
        const student = studentList[i]
    console.log(student.firstName)
    }


}
showStudents(students)


