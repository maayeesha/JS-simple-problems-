//-----------Assignment solution by Maayeesha Farzana-----------//

// problem 1
function seerToMon(seer) {
    if (typeof seer != 'number' || seer < 0) {
        return "Invalid input. Please, enter a valid number."
    }
    var mon = seer / 40;
    return mon;
}

// problem 2

function totalSales(shirt, pant, shoe) {

    if (shirt < 0 || pant < 0 || shoe < 0) {
        return "Invalid input.Please, enter valid number."
    }
    if (typeof shirt != 'number' || typeof pant != 'number' || typeof shoe != 'number') {
        return "Invalid input.Please, enter valid number."
    }

    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;

    const totalShirtPrice = shirt * perShirtPrice;
    const totalPantPrice = pant * perPantPrice;
    const totalShoesPrice = shoe * perShoePrice;

    const totalPrice = totalShirtPrice + totalPantPrice + totalShoesPrice;

    return totalPrice;
}

// problem 3
function deliveryCost(tshirts) {
    if (typeof tshirts != 'number' || tshirts < 0) {
        return "Invalid input. Please, enter a valid input."
    }

    const perFirstHundred = 100;
    const perSecondHundred = 80;
    const perThirdHundred = 50;
    let totalCost = 0;

    if (tshirts <= 100) {
        totalCost = tshirts * perFirstHundred;
    } else if (tshirts > 100 && tshirts <= 200) {
        const firstHundredPrice = 100 * perFirstHundred;
        const remainingTshirt = tshirts - 100;
        const secondHundredPrice = remainingTshirt * perSecondHundred;

        totalCost = firstHundredPrice + secondHundredPrice;
    } else {
        firstHundredPrice = 100 * perFirstHundred;

        secondHundredPrice = 100 * perSecondHundred;

        remainingTshirt = tshirts - 200;

        const thirdHundredPrice = remainingTshirt * perThirdHundred;

        totalCost = firstHundredPrice + secondHundredPrice + thirdHundredPrice;
    }

    return totalCost;
}

// console.log(deliveryCost(732));

//problem 4
function perfectFriend(friends) {

    if (typeof friends != 'object' || typeof friends[0] != 'string') {
        return "Invalid input. Please, enter an array of strings"
    }

    for (let friend of friends) {
        if (friend.length == 5) {
            return friend;
        }
    }
    return "No friends with 5 characters";
}