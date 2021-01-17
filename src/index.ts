import * as $ from "jquery"
import { test } from "./test"
import "./style.css"
// import pepe from "./assets/pepe.png"
import json from "./assets/data.json"
import "./babel"

console.log('sho po test?', JSON.stringify(json), test())
// console.log("pepe", pepe)

$(document).on('click', function () {
    console.log("click!!!")
})