{

    // generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;

    }

    type Owner = "bike" | 'car' | 'ship'  //manully

    type Owner2 = keyof Vehicle;

    const person: Owner = 'car'
    const person1: Owner2 = 'bike'

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: 'Roy',
        age: 35,
        address: 'ny'
    }

    const result = getPropertyValue(user, 'name')


    /*   const user = {
          name: 'Roy',
          age : 35,
          address: 'ny'
      } */

    // user['name'] = 'roy'



















}