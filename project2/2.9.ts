{
    // conditional type


    type a1 = number;
    type b1 = undefined;

    type x = a1 extends null ? true : false; //conditional type

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;


    type Sheikh = {
        bike: string;
        car: string;
        ship: string
        plane: string;
    };

    // have vehicle or no
    // type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;

    // key of oparator
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HaveVehicle = CheckVehicle<'plane'>
















}