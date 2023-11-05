{
    // mapped type

    const arrOfNumber: number[] = [1, 3, 4];

    // const arrOfStrings :string[] = ['1','3','4'];

    const arryOfStrings: string[] = arrOfNumber.map(number => number.toString());

    console.log(arryOfStrings);


    type AreaNumber = {
        height: number;
        width: number;
    }

    type Height = AreaNumber['height'] //lookup type

    // type AreaString = {
    //     height: string;
    //     width: string;
    // }

    // type AreaString = {
    //     [key in keyof AreaNumber]: string
    // }


    // T=>{height:string; width: number}
    // key => "height", "widht"
    // key => T["height"]

    type AreaString<T> = {
        [key in keyof T]: T[key]
    }

    const area1: AreaString<{
        height: string;
        width: number;
    }> = {
        height: '23',
        width: 50,
    }

    
















}