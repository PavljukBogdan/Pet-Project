import * as PIXI from "pixi.js"
import {Globals} from "./Globals";
import {IPuzzlePeace} from "./PuzzleGridConfig";




export class PuzzlePiece extends PIXI.utils.EventEmitter {
    private readonly _sprite: PIXI.Sprite;
    private touchPosition!: PuzzlePoint;
    private dragging: boolean = false;
    private _field: IPuzzlePeace;

    constructor(id: number, filed: IPuzzlePeace) {
        super();
        this._field = filed;
        this._sprite = new PIXI.Sprite(Globals.resources[`puzzle${id}`]!.texture);
        this.reset();


        this._sprite.anchor.set(0.5);
        this._sprite.scale.set(0.5);
        this.setInteractive();
    }

    set field(field: IPuzzlePeace) {
        this._field = field;
        this.reset();
    }

    get field(): IPuzzlePeace {
        return this._field;
    }

    get sprite(): PIXI.Container {
        return this._sprite;
    }

     get left(): number {
        return this.sprite.x - this.sprite.width / 2;
    }

    get right(): number {
        return this.sprite.x + this.sprite.width / 2;
    }

    get top(): number {
        return this.sprite.y - this.sprite.height / 2;
    }

    get bottom(): number {
        return this.sprite.y + this.sprite.height / 2;
    }

    private setInteractive(): void {
        this.sprite.interactive = true;
        this.sprite.on("pointerdown", this.onTouchStart, this);
        this.sprite.on("pointermove", this.onTouchMove, this);
        this.sprite.on("pointerup", this.onTouchEnd, this);
    }

    private onTouchStart(event: PIXI.InteractionEvent): void {
        // save the position of the mouse cursor
        this.touchPosition = {x: event.data.global.x, y: event.data.global.y};
        //set the dragging state for this sprite
        this.dragging = true;
        this.sprite.zIndex = 1;
    }

    private onTouchMove(event: PIXI.InteractionEvent): void {
        if (!this.dragging) {
            return;
        }
        //get the coordinates ot the cursor
        const currentPosition: PuzzlePoint = {x: event.data.global.x, y: event.data.global.y};
        //calculate the offset
        const offsetX: number = currentPosition.x - this.touchPosition.x;
        const offsetY: number = currentPosition.y - this.touchPosition.y;
        //apply the resulting offset
        this._sprite.x = this._field.x + offsetX;
        this._sprite.y = this._field.y + offsetY;

    }

    private onTouchEnd(event: PIXI.InteractionEvent): void {
        this.dragging = false;
        this.sprite.zIndex = 0;
        this.emit("dragend");
    }

    public reset(): void {
        this.sprite.x = this._field.x;
        this.sprite.y = this._field.y;
    }
}

type PuzzlePoint = {x: number, y: number}
