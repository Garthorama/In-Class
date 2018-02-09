class Person {
    constructor(firstName, LastName) {
        this.firstName = firstName;
        this.lastName = LastName;
    }

    greeting() {
        console.log("hello, my name is " + this.firstName + ".");
    }
}

class NewStudent extends Person {
    constructor(studentID, firstName, LastName) {
        super(firstName, lastName);
        this.studentID = studentID;
    }
    studentInfo() {
        console.log(this.studentID + " " + this.firstName + this.lastName);
    }
}

let student = new NewStudent(11, "James", "Winstead");
student.greeting();
student.studentInfo();