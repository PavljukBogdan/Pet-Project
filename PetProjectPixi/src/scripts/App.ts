import * as PIXI from "pixi.js"
import {Loader} from "./Loader";
export class App {
    private app!: PIXI.Application;
    private loader!: Loader;
    public run(): void {
        //create canvas
        this.app = new PIXI.Application({resizeTo: window});
        console.log(this.app);
        //load sprites
        this.loader = new Loader(this.app.loader);
        this.loader.preload().then(this.start);
    }

    private start(): void {
        console.log('game is started')
    }
}
