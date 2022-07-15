import "./app1.css";
import $ from 'jquery'

const $add= $("#add");
const $minus= $("#minus");
const $mutli= $("#multi");
const $divide= $("#divide");
const $number = $("#number")

let n = localStorage.getItem("n");
$number.text(n || 100);

$add.on('click',()=>{
    let n = parseInt($number.text());
    n+=1;
    localStorage.setItem("n",n);
    $number.text(n);
})
$minus.on('click',()=>{
    let n = parseInt($number.text());
    n-=1;
    localStorage.setItem("n",n);
    $number.text(n);
})
$mutli.on('click',()=>{
    let n = parseInt($number.text());
    n*=2;
    localStorage.setItem("n",n);
    $number.text(n);
})
$divide.on('click',()=>{
    let n = parseInt($number.text());
    n/=2;
    localStorage.setItem("n",n);
    $number.text(n);
})

window.onbeforeunload = ()=>{
    localStorage.setItem("n",100)
    $number.text(100)
}