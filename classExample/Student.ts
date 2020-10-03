import {IBallCounter} from "./IBallCounter";

export class Student implements IBallCounter{
    private readonly name: string;
    private readonly lastName: string;
    private list: number[] = [];
    private averageBall: number;

    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    public setBall(ball: number): void {
        this.list.push(ball);
    }
    // геттер getBall дійсно доцільніше визначити як функцію, оскільки її результатом буде загальна інформація,
    // а не "чистий" геттер list.
    public studentBall(): void {
        console.log(`Grades student ${this.name} ${this.lastName} is ${this.list}`);
    }
    //в даному випадку, доцільніше цикла буде ф-ція reduce()
     private calculateAverageBall() {
        this.averageBall = this.list.reduce(function (previousValue,currentValue) {
            return previousValue + currentValue;
        });
        //я походу десь випадково тут згенерував конвертацію)
        return (this.averageBall / this.list.length).toFixed(2);
    }

    public toString() {
        console.log(`Student ${this.name} ${this.lastName}, average ball is ${this.calculateAverageBall()}`);
    }
}