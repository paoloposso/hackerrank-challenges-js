/**
 * 
 * @param {[number]} price 
 */
function minimumLoss(price) {
    let orderedPrices = price.slice().sort((a,b)=> b-a);

    let loss = orderedPrices[0]-orderedPrices[1];
    let buyAt = orderedPrices[0];
    let sellAt = orderedPrices[1];
    
    for (let i = 1; i < orderedPrices.length - 1; i++) {
        if (orderedPrices[i]-orderedPrices[i+1] < loss
            && orderedPrices[i]-orderedPrices[i+1] > 0
            && price.indexOf(orderedPrices[i]) < price.indexOf(orderedPrices[i+1])) {
            buyAt = orderedPrices[i];
            sellAt = orderedPrices[i+1];
            loss = buyAt-sellAt;
        }
    }

    return loss;
}

minimumLoss([20,7,8,2,5])