/*Оскільки інтерфейси визначають публічні контракти, а згідно парадигми ООП (інкапсуляція) поля name: string;
 lastName: string бажано реалізувати приватними, то інтерфейс краще реалізувати як IBallCounter з потрібними публічними
методами
 */

export interface IBallCounter {

    setBall(ball: number): void;

    studentBall(): void;

    toString(): void;
}