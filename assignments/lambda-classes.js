// CODE here for your Lambda Classes

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person2 {
    constructor (data) {
        this.name = data.name;
        this.age = data.age;
        this.location = data.location;
    }
    speak () {
        return `Hello my name is ${this.name} and I am from ${this.location}.`;
    }
}

const person2 = new Person2 ({
    name: 'Freda',
    age: 42,
    location: 'Sweden',
});

console.log(person2.speak());

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person2 {
    constructor (data) {
        super (data);
        this.specialty = data.specialty;
        this.favLanguage = data.favLanguage;
        this.catchPhrase = data.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

const instructor = new Instructor ({
    name: 'Gemma',
    age: 36,
    location: 'France',
    specialty: 'Web',
    favLanguage: 'Ruby on Rails',
    catchPhrase: 'We got this!'
});

console.log(instructor.speak());
console.log(instructor.demo('JavaScript'));
console.log(instructor.grade({name: 'Steve'}, 'HTML'));

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person2 {
    constructor (data) {
        super(data);
        this.previousBackground = data.previousBackground;
        this.className = data.className;
        this.favSubjects = data.favSubjects;
    }
    listsSubjects () {
        return this.favSubjects;
    }
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

const student = new Student ({
    name: 'Andre',
    age: 38,
    location: 'London',
    previousBackground: 'Insurance Broker',
    className: 'CS1',
    favSubjects: ['Music', 'Math', 'History'],
});

console.log(student.listsSubjects());
console.log(student.PRAssignment('JS1'));
console.log(student.sprintChallenge('JS1'));

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
    constructor (data) {
        super(data);
        this.gradClassName = data.gradClassName;
        this.favInstructor = data.favInstructor;
    }
    standUp (slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!​​​`;
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

const projectManager = new ProjectManager ({
    name: 'Isacc',
    age: 27,
    location: 'Morocco',
    specialty: 'Web',
    favLanguage: 'Ruby on Rails',
    catchPhrase: 'We got this!'
});

console.log(projectManager.speak());
console.log(projectManager.demo('JavaScript'));
console.log(projectManager.grade({name: 'Steve'}, 'HTML'));
console.log(projectManager.standUp('@webeu3_isacc'));
console.log(projectManager.debugsCode({name: 'Emily',}, 'JS2'));

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.