import { JATEKLISTA, KEPLISTA, VIDEOLISTA } from "./adatok.js";
const main = $("main");
$(function () {
  const txt = feltolt();
  main.html(txt);
  popUp();
  popUpKosar();
});

function feltolt() {
  let txt = "";
  txt += "<header><h1>Adatok Listázása</h1></header>";
  txt += `<nav>
            <div class="nav_container">
                <ul>
                <li><a href = "index.html" class = "user">USER</a></li>
                  <li><a href = "form.html" class = "admin">ADMIN</a></li>
                  <li><button class="mk_bn" id = "kosar">KOSÁR</button></li>
                </ul>
            </div>
        </nav>`;

  txt += `<article class="row">`;
  for (let i = 0; i < JATEKLISTA.length; i++) {
    txt += `<div class="col-sm-3" id="elem${i}">`;
    txt += `<img src=${KEPLISTA[i]}>`;
    console.log(JATEKLISTA[i].nev)
    txt += `<h2>${JATEKLISTA[i].nev}</h2>`;
    txt += `<p>ár: ${JATEKLISTA[i].ar}</p>`;
    txt += `<p>műfaj: ${JATEKLISTA[i].fajta}</p>`;
    txt += `<div class="button_container"><button id="showItem-${i}" class="mk_b">Mutat</button> <button class="mk_b" id = "kosarba${i}">Kosárba</button></div>`;
    txt += `</div>`;
  }
  txt += "</article>";
  
  return txt;
}

function ablakSzerk(id) {
  let txt = "";
  txt += `<div class="ablak_container">`;
  txt += `<a class="bezar">X</a>`;
  txt += `<h2>${JATEKLISTA[id].nev}</h2>`; 
  txt += `<video controls autoplay width="100%">
  <source src="${VIDEOLISTA[id]}">`;
  return txt;
}

function popUp() {
  const alap = feltolt();
  const body = $("body");
 
  $("button").on("click", function(event){
    let id = parseInt(event.target.id.split("-")[1]);
    const txt = ablakSzerk(id);
    body.append(txt);
    
  })
  
  $(document).on('click', ".bezar", function(){
    const module = $(".ablak_container");
    module.remove();
  })
  
}

function kosarSzerk() {
  let txt = "";
  txt += `<div class="ablak_container">`;
  txt += `<a class="bezar">X</a>`;
  txt += `<h2>Kosár tartalma:</h2>`; 
  txt += `</div>`;
  return txt;
}

function popUpKosar() {
  const body = $("body");
 
  $("#kosar").on("click", function(){
    const txt = kosarSzerk();
    body.append(txt);
  })
  
  $(document).on('click', ".bezar", function(){
    const module = $(".ablak_container");
    module.remove();
  })
}