"use strict";

function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name =  last_name;
    this.full_name = function() {
        return first_name + ' ' + last_name;
    };
};

Person.prototype.full_name_prototype = function() {
    return this.first_name + ' ' + this.last_name;
}

function Professional(honorific, first_name, last_name) {
    Person.call(this, first_name, last_name);
    this.honorific = honorific;
}

Professional.prototype.professional_name = function() {
    return this.honorific + ' ' + this.first_name + ' ' + this.last_name;
}

var prof = new Professional("Dr.", "Tobi", "Olanrewaju");
// dude.first_name = "Ebenezer";

console.log(prof.professional_name());
console.log(prof.full_name_prototype());