let peopleStore = {};
// init the people for empty array
peopleStore.people = [];
peopleStore.setPeoplePath = function(path) {
    // just require the json file for a object
    this.people = require(path);
};

// 获取一个随机数
function getRandom(min, max) {
    // 省略特殊情形下的处理过程，比如 n>m ，或者 n、m之一无法转化为有效数字；
    return Math.round(Math.random() * (max - min) + min);
}

peopleStore.popPeople = function() {
    let randomNumber = getRandom(0, this.people.length - 1);
    let luckyGuy = this.people.splice(randomNumber, 1)[0];
    return luckyGuy;
}

module.exports = peopleStore;
