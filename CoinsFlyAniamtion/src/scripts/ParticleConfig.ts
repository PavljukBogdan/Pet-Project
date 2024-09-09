export const particlesConfig = (app: PIXI.Application) => ({
    alpha: {
        start: 1,
        end: 0
    },
    scale: {
        start: 0.25,
        end: 1,
        minimumScaleMultiplier: 1
    },
    speed: {
        start: 2,
        end: 2,
        minimumSpeedMultiplier: 1000
    },
    acceleration: {
        x: 0,
        y: 0
    },
    maxSpeed: 0.01,
    startRotation: {
        min: 0,
        max: 360
    },
    noRotation: false,
    rotationSpeed: {
        min: 500,
        max: 1000
    },
    lifetime: {
        min: 0.2,
        max: 1
    },
    blendMode: "normal",
    frequency: 0.0001,
    emitterLifetime: -1,
    maxParticles: 100,
    pos: {
        x: app.renderer.width / 2,
        y: app.renderer.height / 2
    },
    addAtBack: false,
    spawnType: "burst",
    particlesPerWave: 0.5,
    particleSpacing: 0,
    angleStart: 1
});
