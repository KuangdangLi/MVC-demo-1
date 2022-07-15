import "./app3.css";
import $ from "jquery";

console.log($)
const $square = $('#app3 .square');
$square.on('click',()=>{
    $square
            .toggleClass('active')
})