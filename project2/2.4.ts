{
    // interface --- generic


    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X
    }


    const poorDeveloper: Developer<{
        brand: string;
        model: string;
        display: string;
    }> = {
        name: 'peter',
        computer: {
            brand: "asus",
            model: 'f435',
            releaseYear: 2019,
        },
        smartWatch: {
            brand: 'samsung',
            model: 'i345',
            display: 'OLED'
        }
    }

    // type AppleWatch = {
    //     brand: string;
    //     model: string;
    //     heartTrack: boolean;
    //     sleepTrack: boolean;
    // }

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike {
        model: string;
        engineCapacity: string;
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: 'kues',
        computer: {
            brand: "asus",
            model: 'f435',
            releaseYear: 2019,
        },
        smartWatch: {
            brand: 'Apple',
            model: 'i345',
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            model: "Yamaha",
            engineCapacity: '300cc'
        }
    }
















}