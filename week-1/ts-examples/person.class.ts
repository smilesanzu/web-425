import { IPerson } from "./person.interface";

class person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new person("Janis", "Gonzalez");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);