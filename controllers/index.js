const awesomeFunction = (req, res, next) => {
    res.json('Athena Burrito');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Another Awesome Person');
};

module.exports = { 
    awesomeFunction,
    returnAnotherPerson
};