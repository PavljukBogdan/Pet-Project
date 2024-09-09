import * as PIXI from "pixi.js"
import {Loader} from "./Loader";
import {CoinAnimation} from "./CoinAnimation";
export class App {
    private app!: PIXI.Application;
    private loader!: Loader;
    private coinAnimation! : CoinAnimation;
    public run(): void {
        //create canvas
        this.app = new PIXI.Application({resizeTo: window});
        document.body.appendChild(this.app.view);
        //load sprites
        this.loader = new Loader(this.app.loader);
        this.loader.preload().then((): void => {this.start()});
    }

    private start(): void {
        this.coinAnimation = new CoinAnimation(this.app);
        this.app.stage.addChild(this.coinAnimation.container);
    }
}
