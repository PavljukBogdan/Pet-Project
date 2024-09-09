export const LoaderConfig: ILoaderConfig = {
    scatter_0: require("../sprites/scatter_0.png"),
    scatter_1: require("../sprites/scatter_1.png"),
    scatter_2: require("../sprites/scatter_2.png"),
    scatter_3: require("../sprites/scatter_3.png"),
    scatter_4: require("../sprites/scatter_4.png"),
    scatter_5: require("../sprites/scatter_5.png"),
    scatter_6: require("../sprites/scatter_6.png"),
};

export interface ILoaderConfig {
    [key: string]: string;
}
