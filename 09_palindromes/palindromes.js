const palindromes = function (phrase) {
    const noSpecial = phrase.replace(/[^a-zA-Z0-9 ]/g, '');
    let noSpaceNoSpecial = noSpecial.replace(/ /g, "");
    const finalString = noSpaceNoSpecial.toLowerCase();
    const arrayOfString = finalString.split('');
    let result = true;
    let counterWeight = arrayOfString.length - 1;
    console.log(arrayOfString)

    for (let i = 0; i < arrayOfString.length; i++){
        if (arrayOfString[i] != arrayOfString[counterWeight]) {
            result = false;
        }
        counterWeight--
    }

    return result;

};

// Do not edit below this line
module.exports = palindromes;
