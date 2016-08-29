let itemStore = {};
itemStore.items = [];
itemStore.setItemsPath = function(path) {
    this.items = require(path);
}
itemStore.popItem = function() {
    if (this.items.length < 1) {
        return null;
    }
    let gift = this.items[0];
    this.items[0]['amount'] -= 1;
    if (gift['amount'] < 1) {
        this.items.splice(0, 1);
    }
    return gift;
}
module.exports = itemStore;
