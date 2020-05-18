/************************************************ */
export const myCities1 = ['HYD', 'New York', 'London', 'Rym'];
const myISPs = ['BSNL', 'Airtel', 'IDEA'];

export function funISPs1()
{
    console.log(myISPs);
}

export class cars1
{
    constructor(){}
    carEngine(){
        console.log("Car Engine is ford");
    }
}

/************************************************ */
const myCities2 = ['HYD2', 'New York2', 'London2', 'Rym2'];
function funISPs2()
{
    console.log(myISPs);
}
class cars2
{
    constructor(){}
    carEngine(){
        console.log("Car2 Engine is ford");
    }
}
export {myCities2, funISPs2 as funfunISPs, cars2}
/************************************************ */
