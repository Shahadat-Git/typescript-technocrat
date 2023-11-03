{

    // nullable types | unkhown types

    const searchName = (value: string | null) => {
        if (value) {
            console.log('Searching')
        } else {
            console.log("There is nothing to search");
        }
    }

    searchName(null)

    // unkhown typeof

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600
            console.log(`The speed is ${convertedSpeed}`);
        }

        if (typeof value == 'string') {
            const [result, unit] = value.split(' ')
            const convertedSpeed = (parseFloat(result) * 1000) / 3600
            console.log(`The speed is ${convertedSpeed}`);
        } else {
            console.log('wrong input')
        }
    }


    getSpeedInMeterPerSecond(`1000 kmh^-1`)


    // never type

    const throwError = (msg: string): never => {
        throw new Error(msg)
    }

    throwError('new error by dev')





























}