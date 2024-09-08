export const LoaderConfig: ILoaderConfig = {
    bg: require("../sprites/bg.png"),
    puzzle1: require("../sprites/1.png"),
    puzzle2: require("../sprites/2.png"),
    puzzle3: require("../sprites/3.png"),
    puzzle4: require("../sprites/4.png"),
    puzzle5: require("../sprites/5.png"),
    puzzle6: require("../sprites/6.png"),
    puzzle7: require("../sprites/7.png"),
    puzzle8: require("../sprites/8.png"),
    puzzle9: require("../sprites/9.png"),

    click: require("../sounds/click.mp3"),
    music: require("../sounds/music.mp3"),

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
