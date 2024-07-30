import * as PIXI from "pixi.js"
import {Globals} from "./Globals";

export class MainScene {

    private readonly _container: PIXI.Container;
    private bg!: PIXI.Sprite;

    constructor() {
        this._container = new PIXI.Container();
        this.createBackground();
    }

    get container(): PIXI.Container {
        return this._container;
    }

    private createBackground(): void {
        this.bg = new PIXI.Sprite(Globals.resources["bg"]!.texture);
        this.container.addChild(this.bg);
        this.bg.width = window.innerWidth;
        this.bg.height = window.innerHeight;
    }
}
