import { JATEKLISTA, KEPLISTA, KOSAR } from "./adatok.js";
const main = $("main");
$(function () {
    kosarHozzaad();
    console.log(KOSAR);
  });

function kosarHozzaad(){
  let kosarGomb = $('.mk_bk');
  let elem = $(".elem_1")
  kosarGomb.on("click", function(){
    KOSAR.push(elem)
  })
}
