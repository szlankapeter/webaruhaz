import { JATEKLISTA, KEPLISTA, KOSAR } from "./adatok.js";
const main = $("main");
$(function () {
    kosarHozzaad();
    console.log(KOSAR);
  });

function kosarHozzaad(){
  let kosarGomb = $('.mk_b');
  let elem = $(".elem_1")
  kosarGomb.on("click", function(event){
    KOSAR.push(elem)
  })
}
