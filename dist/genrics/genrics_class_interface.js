;
var kvProcessor = /** @class */ (function () {
    function kvProcessor() {
    }
    kvProcessor.prototype.process = function (key, val) {
        console.log("Key = ".concat(key, ", val = ").concat(val));
    };
    return kvProcessor;
}());
var proc = new kvProcessor();
proc.process(1, 'Bill'); //Output: key = 1, value = Bill 
