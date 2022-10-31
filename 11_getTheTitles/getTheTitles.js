const getTheTitles = function(books) {
    const arrayOfTitles = [];
    books.forEach(book => {
        arrayOfTitles.push(book["title"])
    });
    return arrayOfTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
