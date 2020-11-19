"use strict";

var animal = {
    kind: "human"
}

// var asim = {};
// asim.__proto__ = animal;

var asim = Object.create(animal);

console.log(asim.kind);