
import { MyCurrentCoinContext } from "./App";


export function fromShekelToDollar(sum, dollarRate) {


    return sum / dollarRate;
}
export function fromDollarToShekel(sum, dollarRate) {

    return dollarRate * sum;
}


export function timePast(date) {
    let today = new Date();
    let difference = today.getTime() - date.getTime();
    console.log(today.getTime() - date.getTime())
    let days = Math.floor(difference / (1000 * 3600 * 24));
    if (days > 0)
        return `לפני ${days} ימים`
    let hours = Math.floor(difference / (1000 * 3600));
    if (hours > 0)
        return `לפני ${hours} שעות`
    let minots = Math.floor(difference / (1000 * 60));
    return `לפני ${minots} דקות`
}