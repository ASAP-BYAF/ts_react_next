var Queue = /** @class */ (function () {
    function Queue() {
        this.array = [];
    }
    Queue.prototype.push = function (item) {
        this.array.push(item);
    };
    Queue.prototype.pop = function () {
        return this.array.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(111);
queue.push(112);
console.log(queue.pop());
