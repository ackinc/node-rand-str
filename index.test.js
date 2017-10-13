const rsg = require('./index');

exports["Throws TypeError if arg cannot be converted to a number with unary+"] = test => {
    test.throws(() => rsg(), TypeError);
    test.throws(() => rsg(NaN), TypeError);
    test.throws(() => rsg('A string that cannot be converted to a number with unary+'), TypeError);
    test.throws(() => rsg({}), TypeError);

    test.done();
}

exports["Returns empty string when called with null, [], or a negative number"] = test => {
    test.equal(rsg(null), "");
    test.equal(rsg([]), "");
    test.equal(rsg(-1), "");

    test.done();
}

exports["Returns string of correct length when called with a whole number"] = test => {
    test.equal(rsg(0).length, 0);
    test.equal(rsg(1).length, 1);
    test.equal(rsg(80).length, 80);
    test.equal(rsg(2500).length, 2500);
    test.equal(rsg(1e5).length, 1e5);

    test.done();
}
