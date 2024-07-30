// @ts-ignore
import {ILoaderConfig, LoaderConfig} from "./LoaderConfig";
export class Loader {
    private loader: PIXI.Loader;
    private readonly resources: ILoaderConfig;
    constructor(loader: PIXI.Loader) {
        this.loader = loader;
        this.resources = LoaderConfig;
    }

    public preload(): Promise<void> {
        return new Promise<void>(resolve => {
            for (const key in this.resources) {
                this.loader.add(key, this.resources[key]);
            }
            this.loader.load((_loader: PIXI.Loader, _resources: Partial<Record<string, PIXI.LoaderResource>>) => {
                console.log(_resources);
                resolve();
            });
        });
    }
}

