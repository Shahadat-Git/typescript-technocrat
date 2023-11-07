{
    // abstraction : 1. interface 2. abstract

    /*     interface Vehicle1 {
            name: string;
            model: number;
        }
    
        // const vehicle1: Vehicle1 = {
        //     name: 'toyota',
        //     model: 2010,
        // }
    
        class Car implements Vehicle1 {
            name: string;
            model: number;
    
            constructor(name: string, model: number) {
                this.name = name;
                this.model = model;
            }
        } */

    // idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // real implementation

    class Car implements Vehicle1 {
        startEngine(): void {
            console.log(`I am starting the car`);
        }
        stopEngine(): void {
            console.log(`I am stoping the car engine`);
        }
        move(): void {
            console.log(`I am moving the car`);
        }

        test() {
            console.log(`I am just testing`);
        }
    }


    const toyotaCar = new Car();

    toyotaCar.startEngine();

    //abstract class

    // idea
    abstract class Car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void
        test() {
            console.log(`I am just testing`);
        }
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log(`I am starting the car`);
        }
        stopEngine(): void {
            console.log(`I am stoping the car engine`);
        }
        move(): void {
            console.log(`I am moving the car`);
        }

    }


    const hondaCar = new ToyotaCar();

    hondaCar.startEngine()










}