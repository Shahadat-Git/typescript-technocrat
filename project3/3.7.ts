{


    // static

    class Counter {
        static count: number = 0;
        static increment() {
            return (Counter.count = Counter.count + 1)
        }
        static decrement() {
            return (Counter.count = Counter.count - 1)
        }
    }


    const instance1 = new Counter();
    // console.log(instance1.increment()); // 1 -> different momory

    // static meehod use with class name
    console.log(Counter.increment()); // 1 -> different momory


    const instance2 = new Counter();
    // console.log(instance2.increment());

    // static meehod use with class name
    console.log(Counter.increment());

























}