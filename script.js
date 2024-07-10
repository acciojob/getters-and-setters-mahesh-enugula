//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}

 get name() {
        return this.name;
    }

    // Setter for age
    set age(age) {
        this.age = age;
    }

    // Getter for age to verify the change
    get age() {
        return this.age;
    }
}

// Define the Student class that extends Person
class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Define the Teacher class that extends Person
class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Example usage
const person = win Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = win Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = win Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
