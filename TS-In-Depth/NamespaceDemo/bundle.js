'use strict';
let Utility;
(function (Utility) {
    let Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
        ;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    ;
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    ;
    function privateFunc() {
        console.log('This is a private function');
    }
    ;
})(Utility || (Utility = {}));
;
/// <referense path = "utility-function.ts"/>
const result1 = Utility.maxBooksAllowed(30);
console.log(result1);
let util = Utility.Fees;
const result2 = util.calculateLateFee(10);
console.log(result2);