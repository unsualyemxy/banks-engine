class Engine {
     start() {
        console.log('Engine Started')
     }
}
class carz {
    engine: Engine;

    constructor(engine: Engine){
        this.engine = engine
    }
startcar(){
    console.log('car Started')
    this.engine.start()
}
}
const engine = new Engine()
const car = new carz(engine)
car.startcar()
