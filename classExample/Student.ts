import {IStudent} from "./IStudet";

export class Student implements IStudent{
    private name: String;
    private lastName: String;
    private list: Array <number> = [];
    private averageBall: number;

    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    public setBall(ball: number): void {
        this.list.push(ball);
    }

    public getBall() {
        return console.log(`Grades student ${this.name} ${this.lastName} is ${this.list}`);
    }

     private calculateAverageBall() {
        this.averageBall = 0;
        for (let i = 0; i < this.list.length; i++) {
            this.averageBall += this.list[i];
        }
        return parseFloat(String(this.averageBall / this.list.length)).toFixed(2);
    }

    public toString() {
        console.log(`Student ${this.name} ${this.lastName}, average ball is ${this.calculateAverageBall()}`);
    }
}