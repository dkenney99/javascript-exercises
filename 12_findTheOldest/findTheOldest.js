const findTheOldest = function(people) {
    let oldest = "";
    let oldestAge = 0;
    people.forEach(person => {
        if (person.yearOfDeath == undefined) {
            person.yearOfDeath = 2022;
        }
        if ((person.yearOfDeath - person.yearOfBirth) > oldestAge) {
            oldestAge = (person.yearOfDeath - person.yearOfBirth);
            oldest = person["name"]
        }
    });
    console.log(oldest)
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
