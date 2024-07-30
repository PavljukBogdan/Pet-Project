import * as PIXI from "pixi.js"
import {Loader} from "./Loader";
import {MainScene} from "./MainScene";
export class App {
    private app!: PIXI.Application;
    private loader!: Loader;
    private scene!: MainScene;
    public run(): void {
        //create canvas
        this.app = new PIXI.Application({resizeTo: window});
        document.body.appendChild(this.app.view);
        //load sprites
        this.loader = new Loader(this.app.loader);
        this.loader.preload().then((): void => {this.start()});
    }

    private start(): void {
        this.scene = new MainScene();
        this.app.stage.addChild(this.scene.container);
    }
}
