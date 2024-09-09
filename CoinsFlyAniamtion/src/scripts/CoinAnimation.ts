import * as PIXI from "pixi.js";
import { Emitter } from 'pixi-particles';
import { Globals } from "./Globals";
import {particlesConfig} from "./ParticleConfig";

export class CoinAnimation {
    private readonly _container: PIXI.Container;
    private readonly app!: PIXI.Application;
    private coinsTextures: PIXI.Texture[] = [];
    private emitter!: Emitter;
    private coinCreationTimeout!: number;

    constructor(app: PIXI.Application) {
        this.app = app;
        this._container = new PIXI.Container();
        this.app.stage.addChild(this._container);
        this.addCoinsTextures().then(() => {
            this.startEmitter();
            this.app.ticker.add((delta) => {
                if (this.emitter) {
                    this.emitter.update(delta * 0.003);
                }
            });
        }).catch((error) => {
            console.error("Error loading texture:", error);
        });
    }

    // Завантажуємо текстури для покадрової анімації
    private addCoinsTextures(): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                for (let i = 0; i < 7; i++) {
                    const resource: PIXI.LoaderResource | undefined = Globals.resources[`scatter_${i}`];
                    if (resource && resource.texture && resource.texture.valid) {
                        this.coinsTextures.push(resource.texture);
                    } else {
                        console.error(`Texture scatter_${i} is not available or not valid.`);
                    }
                }
                if (this.coinsTextures.length > 0) {
                    resolve();
                } else {
                    reject(new Error('No valid textures found in Globals.resources.'));
                }
            } catch (error) {
                reject(new Error('Error occurred while loading textures.'));
            }
        });
    }

    private startEmitter(): void {
        if (this.coinsTextures.length === 0) {
            console.error("No valid textures available for the emitter.");
            return;
        }

        this.emitter = new Emitter(
            this._container,
            this.coinsTextures,
            particlesConfig(this.app)
        );

        this.emitter.emit = true;

        this.coinCreationTimeout = window.setTimeout(() => {
            this.stopEmitter();
        }, 30000);
    }

    private stopEmitter(): void {
        if (this.emitter) {
            this.emitter.emit = false;
            this.emitter.cleanup();
        }
    }

    get container(): PIXI.Container {
        return this._container;
    }
}
