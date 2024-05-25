
const justFood = (pocetLidi) => {
    const cenaNaOsobu = 100 
    return 'catering od Just Food pro ' + pocetLidi + ' lidí za ' + pocetLidi * cenaNaOsobu 
}

const yourMama = (pocetLidi) => {
    const cenaNaOsobu = 200 
    return 'catering od Your Mama pro ' + pocetLidi + ' lidí za ' + pocetLidi * cenaNaOsobu 
}

const flavourHaven = (pocetLidi) => {
    const cenaNaOsobu = 300 
    return 'catering od Flavour Haven pro ' + pocetLidi + ' lidí za ' + pocetLidi * cenaNaOsobu 
}


const createEvent = (nazevUdalosti, pocetLidi, catering) => {
    const vyberCateringu = catering(pocetLidi)
    document.body.innerHTML += '<p>' + 'Událost ' + nazevUdalosti + ' s ' + vyberCateringu + '</p>'
}

createEvent('Inaugurace prezidenta', 500, flavourHaven)
createEvent('svatba', 100, yourMama)
createEvent('oslava narozenin', 50, justFood)