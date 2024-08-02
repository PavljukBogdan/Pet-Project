import * as PIXI from "pixi.js"
import {IPuzzlePeace, PuzzleGridConfig} from "./PuzzleGridConfig";
import {PuzzlePiece} from "./PuzzlePiece";

export class PuzzleGrid {

    private _container: PIXI.Container;
    private pieces!: PuzzlePiece[];

    constructor() {
        this._container = new PIXI.Container();
        this._container.x = window.innerWidth / 2;
        this._container.y = window.innerHeight / 2;
        this._container.sortableChildren = true;
        this.cratePuzzlePieces();
    }

    get container(): PIXI.Container {
        return this._container;
    }

    private cratePuzzlePieces(): void {
        this.pieces = [];

        let ids: number[] = PuzzleGridConfig.map(field => field.id);

        PuzzleGridConfig.forEach((filed: IPuzzlePeace): void => {
            const random: number = Math.floor(Math.random() * ids.length);
            const id: number = ids[random];
            ids = ids.filter(item => item !== id);

            const piece: PuzzlePiece = new PuzzlePiece(id, filed);
            piece.on("dragend", () => this.onPieceDragendEnd(piece));

            this.container.addChild(piece.sprite);
            this.pieces.push(piece);
        });
    }

    private onPieceDragendEnd(piece: PuzzlePiece): void {
        const pieceToReplace: PuzzlePiece | undefined = this.pieces.find(item =>
            item !== piece &&
            piece.sprite.x >= item.left &&
            piece.sprite.x <= item.right &&
            piece.sprite.y <= item.bottom &&
            piece.sprite.y >= item.top);

        if(pieceToReplace) {
            const replaceField: IPuzzlePeace = pieceToReplace.field;
            pieceToReplace.field = piece.field;
            piece.field = replaceField;
        } else {
            piece.reset();
        }
    }

}
