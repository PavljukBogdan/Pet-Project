export const Globals : IGlobals = {
    resources: {}
}

interface IGlobals {
    resources: Partial<Record<string, PIXI.LoaderResource>>
}
