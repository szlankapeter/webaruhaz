import { KUTYALISTA, KEPLISTA, VIDEOLISTA } from "./adatok.js";
const main = $("main");
$(function () {
  const txt = feltolt();
  main.html(txt);
  popUp();
});

function feltolt() {
  let txt = "";
  txt += "<header><h1>Adatok Listázása</h1></header>";
  txt += `<nav>
            <div class="nav_container">
                <ul>
                  <li><a>Public felület</a></li>
                  <li><a>Admin felülelt</a></li>
                  <li><button class="kosar_b">KOSÁR</button></li>
                </ul>
            </div>
        </nav>`;

  txt += `<article class="row">`;
  for (let i = 0; i < KUTYALISTA.length; i++) {
    txt += `<div class="col-sm-3">`;
    txt += `<img src=${KEPLISTA[i]}>`;
    txt += `<h2>${KUTYALISTA[i].nev}</h2>`;
    txt += `<p>ár: ${KUTYALISTA[i].ar}</p>`;
    txt += `<p>műfaj: ${KUTYALISTA[i].fajta}</p>`;
    txt += `<div class="button_container"><button id="showItem-${i}" class="mk_b">Mutat</button> <button class="mk_b">Kosárba</button></div>`;
    txt += `</div>`;
  }
  txt += "</article>";
  
  return txt;
}

function ablakSzerk(id) {
  let txt = "";
  txt += `<div class="ablak_container">`;
  txt += `<a class="bezar">X</a>`;
  txt += `<h2>${KUTYALISTA[id].nev}</h2>`;
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
