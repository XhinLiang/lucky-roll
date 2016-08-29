let peopleStore = {};
peopleStore.people = [];
peopleStore.setPeoplePath = function(path) {
    this.people = require(path);
    //console.log(JSON.stringify(this.people));
};

function getRandom(n, m) {
    //省略特殊情形下的处理过程，比如n>m，或者n、m之一无法转化为有效数字；
    return Math.round(Math.random() * (m - n) + n);
}

peopleStore.popPeople = function() {
    let randomNumber = getRandom(0, this.people.length - 1);
    let luckyGuy = this.people.splice(randomNumber, 1)[0];
    return luckyGuy;
}
module.exports = peopleStore;
