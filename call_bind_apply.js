"use strict";

var asim = {
    checkThis: function() {
        var checkOther = function() {
            console.log(this);
        }.bind(1);

        checkOther();
    }
}
asim.checkThis();

asim.checkThis.call(1);

asim.checkThis.apply(1);